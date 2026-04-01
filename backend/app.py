from flask  import Flask,render_template,request,jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)


client=MongoClient('mongodb://localhost:27017')

db=client['flaskreactfullstack']  #database name

CORS(app)  #prevent the cros error

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users',methods=['POST','GET'])
def data():
    
    if request.method=='POST':
        body=request.json
        firstName=body['firstName']
        lastName=body['lastName']
        emailId= body['emailId']
        
        db['users'].insert_one({
            "firstName":firstName,
            "lastName":lastName,
            "emailId":emailId
        })
        
        return jsonify({
            'status':'data is posted to mongodb',
            'firstName':firstName,
            'lastName':lastName,
            'emailId':emailId
        })
    
    
    if request.method=='GET':
        allData = db['users'].find()
        dataJson = []
        
        for data in allData:
            id = data['_id']   
            firstName = data['firstName']
            lastName = data['lastName']
            emailId = data['emailId']
            
            dataDict = {
                "id" : str(id),
                "firstName" : firstName,
                "lastName" : lastName,
                "emailId" : emailId
            }
            dataJson.append(dataDict)
        
        return jsonify(dataJson)  
@app.route('/users/<string:id>',methods=['GET','PUT','DELETE'])
def onedata(id):
    
    if request.method == 'GET':
        data = db['users'].find_one({"_id":ObjectId(id)})
        id=data['_id']
        firstName = data['firstName']
        lastName= data['lastName']
        emailId = data['emailId']
        
        dataDict = {
            "id":str(id),
            "firstName": firstName,
            "lastName": lastName,
            "emailId":emailId
        }
        return jsonify(dataDict)
    if request.method == 'DELETE':
        db['users'].delete_many({"_id":ObjectId(id)})
        return jsonify({
            "status":"Data id:" + id + "is deleted"
        })
        
@app.route('/users/<id>', methods=['PUT'])
def update_user(id):
    body = request.json
    
    firstName = body['firstName']
    lastName = body['lastName']
    emailId = body['emailId']
    
    db['users'].update_one(
        {'_id': ObjectId(id)},
        {
            "$set": {
                "firstName": firstName,
                "lastName": lastName,
                "emailId": emailId
            }
        }
    )
    
    return jsonify({
        "status": "User updated successfully"
    })
    
        

if __name__=='__main__':
    app.debug=True
    app.run()


















