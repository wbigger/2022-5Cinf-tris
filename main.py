from flask import Flask,jsonify,request

app = Flask(__name__)

board = [['-','-','-'],['-','-','-'],['-','-','-']]

print("init")

@app.get("/")
def hello():
    # return "hello!"
    return app.send_static_file("index.html")

@app.get('/board')
def getBoard():
  return jsonify(board) # convert board into a json response

def play(board):
  print("play")
  for r in range(3):
    for c in range(3):
        if board[r][c]=="-":
            board[r][c] = "X"
            print(r,c)
            return board
      
  
@app.put('/board')
def putBoard():
  print("put")
  global board # if we want to write on a global var, we need this
  board = request.json
  board = play(board)
  return "Writing on board OK!!"

app.run('0.0.0.0',port=80)