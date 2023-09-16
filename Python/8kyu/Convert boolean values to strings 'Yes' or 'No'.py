# https://www.codewars.com/kata/53369039d7ab3ac506000467/python

# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

# def bool_to_word(boolean):

def bool_to_word(boolean):
  if boolean == True:
    return "Yes"
  if boolean == False:
    return "No"

# or use built in bool
def bool_to_word(boolean):
  if bool(boolean):
    return "Yes"
  else:
    return "No"

# short form
def bool_to_word(bool):
    return "Yes" if bool else "No"