import os
__author__ = "IPZ-13 @MI_XXX"
old_encoding_string = "charset=windows-1251"
new_encoding_string = "charset=utf-8"
current_path = os.getcwd() + '\\'

def fix_file(path):
    print(f"Fixing: {path}")
    try:
        old_content = open(path, encoding='cp1251').read()
        new_content = old_content.replace(old_encoding_string, new_encoding_string)
        open(path, mode="w", encoding='utf8').write(new_content)
        print("Success!")
    except Exception as error:
        print(error)

def parse_files(path):
    files = list_files(path)
    for file in files:
        path_to_object = path + file
        if os.path.isfile(path_to_object):
            if get_extension(file) in valid_extension:
                fix_file(path_to_object)
        if os.path.isdir(path_to_object):
            parse_files(path_to_object + "\\")

def list_files(path = None):
    if path == None:
        return os.listdir()
    else:
        return os.listdir(path)

def get_extension(name):
    return name.split(".")[-1]

valid_extension = ['html', 'htm']

root_folder = current_path
parse_files(root_folder)

        