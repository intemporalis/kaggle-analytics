from pathlib import Path
from utils import getFiles, csv_to_json

resourcePath = str(Path(__file__).parents[2]) + '\\resources\\'
fileType = ".csv"

#print(resourcePath)
fileList = getFiles(resourcePath, fileType)

#print(fileList)
for fileName in fileList:
    csv_path = resourcePath + fileName
    json_tgt = resourcePath + fileName.split('.', 1)[0] + '.json'

    csv_to_json(csv_path, json_tgt)