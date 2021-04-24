def generate_instructor_list(exercise_list):
    instructors = set()
    
    with open(exercise_list, "r+") as file:
        for line in file.readlines():
            line_split = line.replace("\n", "").split('"')
            if len(line_split) > 3:
                instructors.add(line_split[3])

    instructor_str = ""

    for instructor in sorted(list(instructors)):
        instructor_str += f'                        <li>{instructor}</li>\n'
        
    return instructor_str

INSERT_PILATES_STR = "<<<PILATES_INSTRUCTORS>>>"
INSERT_YOGA_STR = "<<<YOGA_INSTRUCTORS>>>"
INSERT_RELIEF_STR = "<<<RELIEF_INSTRUCTORS>>>"

write_str = ""

with open("instructors_template.html", "r+") as read_file:
    for line in read_file.readlines():
        line = line.replace("\n", "")
        
        if INSERT_PILATES_STR in line:
            write_str += generate_instructor_list("../sites/static/js/pilates_list.js")
        elif INSERT_YOGA_STR in line:
            write_str += generate_instructor_list("../sites/static/js/yoga_list.js")
        elif INSERT_RELIEF_STR in line:
            write_str += generate_instructor_list("../sites/static/js/relief_list.js")
        else:
            write_str += f'{line}\n'
            
with open("instructors.html", "w") as file:
    file.write(write_str)
