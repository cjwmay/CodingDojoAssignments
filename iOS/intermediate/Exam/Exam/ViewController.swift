//
//  ViewController.swift
//  Exam
//
//  Created by jingwen on 5/25/17.
//  Copyright © 2017 jingwen. All rights reserved.
//

import UIKit
import CoreData

class ViewController: UIViewController,BackButtonDelegate, UISearchResultsUpdating, UITableViewDelegate {
    let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    let appDel = UIApplication.shared.delegate as! AppDelegate
    
    var searchController: UISearchController!
    var resultsController = UITableViewController()
    var filteredTask = [String]()
    var tasktextarr = [String]()

    @IBOutlet weak var tableView: UITableView!
    var editDel: EditDelegate?
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        tableView.dataSource = self
        tableView.delegate = self
        fetch()
        self.resultsController.tableView.dataSource = self
        self.resultsController.tableView.delegate = self
        
        self.searchController = UISearchController(searchResultsController: self.resultsController)
        self.tableView.tableHeaderView = self.searchController.searchBar
        self.searchController.searchResultsUpdater = tableView as? UISearchResultsUpdating

    }
    func updateSearchResults(for searchController: UISearchController) {
            self.filteredTask = tasktextarr.filter{ (task:String) -> Bool in
                if task.lowercased().contains(self.searchController.searchBar.text!.lowercased()){
                        return true
                    }else{
                        return false
                    }
            
        }
        self.resultsController.tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    //segue
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let navigationController = segue.destination as! UINavigationController
        let destination = navigationController.topViewController as! AddViewController
        destination.backDel = self
    }
    func backButtonPressed(by controller: UIViewController) {
        dismiss(animated: true, completion: nil)
        fetch()
    }
    func fetch(){
        let itemRequest = NSFetchRequest<NSFetchRequestResult>(entityName: "Task")
        let sort = NSSortDescriptor(key: #keyPath(Task.date), ascending: false)
        itemRequest.sortDescriptors = [sort]
        
        do {
            let results = try context.fetch(itemRequest)

            appDel.tasks = results as! [Task]
            for t in appDel.tasks{
                tasktextarr.append(t.task!)
            }
            print(appDel.tasks)
        } catch {
            print("\(error)")
        }
        tableView.reloadData()
    }
    
    
    


}


extension ViewController: UITableViewDataSource{
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if tableView == self.tableView{
            return appDel.tasks.count
        }else{
            return self.filteredTask.count
        }
        
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let formatter = DateFormatter()
        formatter.dateFormat = "MM-dd-yyyy"
        let cell = self.tableView.dequeueReusableCell(withIdentifier: "MyCell") as! MyCell
        if tableView == self.tableView {
            cell.leftLabel.text = appDel.tasks[indexPath.row].task
            let myStringafd = formatter.string(from: appDel.tasks[indexPath.row].date! as Date)
            cell.rightLabel.text = myStringafd
        }else{
            cell.leftLabel.text = self.filteredTask[indexPath.row]
            cell.rightLabel.text = ""
            
        }
        
        return cell
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        appDel.edittask = appDel.tasks[indexPath.row]
        performSegue(withIdentifier: "add", sender: indexPath.row)
        
    }
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        context.delete(appDel.tasks[indexPath.row])
        fetch()
    }
}
