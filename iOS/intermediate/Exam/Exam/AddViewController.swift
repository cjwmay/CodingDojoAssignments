//
//  AddViewController.swift
//  Exam
//
//  Created by jingwen on 5/25/17.
//  Copyright © 2017 jingwen. All rights reserved.
//

import UIKit
import CoreData

class AddViewController: UIViewController {
    let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    let appDel = UIApplication.shared.delegate as! AppDelegate
    
    var backDel: BackButtonDelegate?

    @IBOutlet weak var textFieldOutlet: UITextField!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        if let edittest = appDel.edittask{
            textFieldOutlet.text = edittest.task
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    @IBAction func backButtonPressed(_ sender: UIBarButtonItem) {
        if appDel.edittask != nil {
            appDel.edittask?.task = textFieldOutlet.text!
            appDel.edittask?.date = Date() as NSDate
            do {
                try context.save()
                print("Success")
            } catch {
                print("\(error)")
            }

        }else{
            let addatask = NSEntityDescription.insertNewObject(forEntityName: "Task", into: context) as! Task
            addatask.task = textFieldOutlet.text!
            addatask.date = Date() as NSDate
            if context.hasChanges {
                do {
                    try context.save()
                    print("Success")
                } catch {
                    print("\(error)")
                }
            }
        }

        backDel?.backButtonPressed(by: self)
        //print(appDel.tasks)
    }
    
    
    


}
