//
//  NewContactViewController.swift
//  exam_Jingwen
//
//  Created by jingwen on 5/30/17.
//  Copyright © 2017 jingwen. All rights reserved.
//

import UIKit
import CoreData



class NewContactViewController: UIViewController {
    let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var doneAddingDel: doneAdding?
    var editPerson: Person?
    var editFname: String?
    var editLname: String?
    var editNumber: String?
    var titletext: String?
    
    
    //textField
    @IBOutlet weak var fnameTextField: UITextField!
    @IBOutlet weak var lnameTextField: UITextField!
    @IBOutlet weak var numberTextField: UITextField!
    

    override func viewDidLoad() {
        super.viewDidLoad()
        fnameTextField.text = editFname
        lnameTextField.text = editLname
        numberTextField.text = editNumber

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    //action
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        self.dismiss(animated: true, completion: nil)
    }
    @IBAction func saveButtonPressed(_ sender: UIBarButtonItem) {
        if editPerson == nil{
            let newPerson = NSEntityDescription.insertNewObject(forEntityName: "Person", into: context) as! Person
            newPerson.fname = fnameTextField.text
            newPerson.lname = lnameTextField.text
            newPerson.number = numberTextField.text
            do{
                try context.save()
            }catch{
                print(error)
            }
        }else{
            editPerson?.fname = fnameTextField.text
            editPerson?.lname = lnameTextField.text
            editPerson?.number = numberTextField.text
            do {
                try context.save()
                print("Success")
            } catch {
                print("\(error)")
            }
        }
        
        self.doneAddingDel?.doneAdding()
        self.dismiss(animated: true, completion: nil)
        
    }
    
    
    
    
    


}
