//
//  PersonViewController.swift
//  exam_Jingwen
//
//  Created by jingwen on 5/30/17.
//  Copyright © 2017 jingwen. All rights reserved.
//

import UIKit
import CoreData
class PersonViewController: UIViewController {
     let context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    var viewPerson: Person?
    var name: String?
    var number: String?
    var labeltitle: String?

    //outlet
    @IBOutlet weak var bar: UINavigationItem!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numberLabel: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        nameLabel.text = name
        numberLabel.text = number
        bar.title = labeltitle

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    //action
    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        self.dismiss(animated: true, completion: nil)
    }
    
    
    
    
   
    



}
