//
//  MainTableViewController.swift
//  exam_Jingwen
//
//  Created by jingwen on 5/30/17.
//  Copyright © 2017 jingwen. All rights reserved.
//

import UIKit
import CoreData

class MainTableViewController: UITableViewController,doneAdding{
    
    
    
    let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var people = [Person]()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetch()
        print("hihi")
        // Do any additional setup after loading the view, typically from a nib.
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    
    
    //table
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return people.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath) as! myCell
        cell.textLabel?.text = people[indexPath.row].fname! + people[indexPath.row].lname!
        cell.detailTextLabel?.text = people[indexPath.row].number
        // cell.detailLabel?.text = people[indexPath.row].number!
        return cell
    }
    //select on row
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let actionSheet = UIAlertController(title: nil, message: "Choose a Action", preferredStyle: .actionSheet)
        
        let addAction = UIAlertAction(title: "View", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            print("File has been View")
            self.performSegue(withIdentifier: "viewPerson", sender: self.people[indexPath.row])
            print(self.people[indexPath.row].fname!)
        })
        let saveAction = UIAlertAction(title: "Edit", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            print("File has been Edit")
            self.performSegue(withIdentifier: "addPerson", sender: indexPath.row)
        })
        let deleteAction = UIAlertAction(title: "Delete", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            print("File has been Delete")
            self.context.delete(self.people[indexPath.row])
            do { try self.context.save() }
            catch { print(error) }
            self.fetch()
        })
        actionSheet.addAction(addAction)
        actionSheet.addAction(saveAction)
        actionSheet.addAction(deleteAction)
        actionSheet.addAction(UIAlertAction(title: "Cancel", style: .default, handler: {(action:UIAlertAction) in}))
        
        self.present(actionSheet, animated: true, completion: nil)
    }
    
    //segue
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if sender is Person{
            let viewPerson = sender as! Person
            let destination = segue.destination as! PersonViewController
            destination.name = viewPerson.fname! + viewPerson.lname!
            destination.number = viewPerson.number!
            destination.labeltitle = viewPerson.fname!
        }else if sender is Int{
            let idx = sender as! Int
            let editPerson = people[idx]
            let destination = segue.destination as! NewContactViewController
            destination.editFname = editPerson.fname
            destination.editLname = editPerson.lname
            destination.editNumber = editPerson.number
            destination.editPerson = editPerson
            destination.titletext = "Edit Contact"
            destination.doneAddingDel = self
        }
        else{
            let destination = segue.destination as! NewContactViewController
            destination.doneAddingDel = self
        }
        
    }
    func doneAdding() {
        fetch()
    }
    

    
    
    
    
    //fetch
    func fetch(){
        let userRequest = NSFetchRequest<NSFetchRequestResult>(entityName: "Person")
        do {
            let results = try context.fetch(userRequest)
            people = results as! [Person]
        } catch {
            print("\(error)")
        }
        tableView.reloadData()
    }

    
    
    
    


}

