
use std::fs;

pub fn solution() -> i32 {
    let data : String = fs::read_to_string("./input.txt").unwrap();

    let mut total_result = 0;    
    
    let mut execute_status = true; 

    // walk the stringggg
    for i in 0..data.len() {
        
        let letter_pov = &data.chars().nth(i).unwrap().to_string();
        let letter = letter_pov.as_str();

        if (letter.clone() == "m") && (execute_status) {
            let pos_valid_string = &data[i..i+14]; 
             
            let begin_seq : Vec<&str> = pos_valid_string.split("mul(").collect(); 
            
            let mut first_num = 0;
            let mut second_num = 0;
            
            let split_data : Vec<&str> = begin_seq[0].split(",").collect();
            
            if split_data.len() < 2 {
                continue;
            }

            if (split_data[0].parse::<i32>().is_ok()) && (split_data.len() < 4) {
                first_num = split_data[0].parse::<i32>().unwrap();
            }
            
            let pos1_second_num = split_data[1].split(")").collect::<Vec<&str>>();
            let pos2_second_num = pos1_second_num[0]; 
            
            if (pos2_second_num.parse::<i32>().is_ok()) && (pos2_second_num.len() < 4) {
                second_num = pos2_second_num.parse::<i32>().unwrap(); 
            }

            total_result = total_result + (first_num * second_num); 
        }
        
        if letter.clone() == "d"{
            let pos_do_string = &data[i..i+4];
        
            if pos_do_string.contains("do()") {
                execute_status = true;
            }
            
            let pos_dont_string = &data[i..i+7];

            if pos_dont_string.contains("don't()") {
                execute_status = false;
            }
        } 

    } 

    return total_result;
}

fn main() {
    println!("{:?}", solution());
}

