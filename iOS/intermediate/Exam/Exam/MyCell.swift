//
//  MyCell.swift
//  Exam
//
//  Created by jingwen on 5/25/17.
//  Copyright © 2017 jingwen. All rights reserved.
//

import UIKit

class MyCell: UITableViewCell {

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    @IBOutlet weak var leftLabel: UILabel!
    @IBOutlet weak var rightLabel: UILabel!

}
