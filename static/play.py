board = [['-','-','-'],['-','-','-'],['-','-','-']]

def play():
  global board
  for r_idx in range(3):
    for c_idx in range(3):
        if board[r_idx][c_idx]=="-":
            board[r_idx][c_idx] = "X"
            return
        

play()      
print(board)
      
