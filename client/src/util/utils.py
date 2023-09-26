# Imports are defined within helper functions
# to prevent global import bloat


def getFiles(path, type):
    import os
    return list(filter( lambda f: f.endswith(type), os.listdir(path) ) )

def csv_to_json(csv_path, json_path):
    import pandas as pd
    from os.path import exists

    # prevent duplication
    if (exists(json_path)):
        return
    if (not exists(csv_path)):
        print('file not found at provided path: ' + csv_path)
        return
    if (not csv_path.endswith('.csv')):
        print('provided file path does not end in .csv')
        return

 # with open(csv_path, encoding='utf-8', errors='ignore') as file:
 #       df = pd.read_csv(file, encoding='utf-8', on_bad_lines = 'skip')
    with open(csv_path, encoding='latin1') as file:
        df = pd.read_csv(file, encoding='latin1')
    
    df.to_json(json_path, orient='records')

#def sanitize_json(json_path):
