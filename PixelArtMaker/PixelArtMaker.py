#-----------------------------------------------------------------------------
# Name:        Pixel Art Creator - Programming Assignment 2
# Purpose:     Allows user to create pixel art with maximum dimensions of 16 x 16
#
# Author:      Emily Peng
# Created:     19-May-2026
# Updated:     2-June-2026
#-----------------------------------------------------------------------------

'''
Tkinter Module: lines 190-202, 232 (mouse click event), 205-245, 261 (root.after()), sliders (322-327, 229), radio buttons (335-345, 218-223), 371-374
https://www.geeksforgeeks.org/python/python-gui-tkinter/
  
  Tkinter Frame: lines 310, 314, 318
  https://www.tutorialspoint.com/python/tk_frame.htm

  Tkinter Canvas: lines 226, 229-232, 240-245
  https://www.geeksforgeeks.org/python/python-tkinter-canvas-widget/
  
    Tkinter Clear Canvas: line 214
    https://www.geeksforgeeks.org/python/how-to-clear-tkinter-canvas/ 

RGB Function DO NOT ASSESS: lines 114-148 (function), lines 229, 242, 245
https://stackoverflow.com/questions/51591456/can-i-use-rgb-in-tkinter 
'''

import math
import tkinter as tk

def setup_grid(x, y, value=0):
  '''
  Returns a two dimensional grid-like nested list
  
  Two for loops are used. One looping the given x amount of times, the other nested inside the other, looping y amount of times. An empty list is created at the beginning of each outer loop, and within each nested loop, the given value is appended to the end of the list. The list is then appended to a larger list at the end of the outer loop. After all the loops are completed, the function returns the final nested list. This function is used to setup a list to hold the original, "empty" (empty in this case would be white, so [255, 255, 255]) list. This function can be reused in other programs to create any "empty" list. The inputed x and y values must be positive integers. The function has no upper bound for the x or y values, but be considerate of how large values may affect processing speed. 

  Parameters
  ----------
  x : int
    width of the two dimensional nested list
  y : int
    length of the two dimensional nested list
  value : any
    placeholder value each element of nested list starts out with, with a default being 0
  
  Returns
  -------
  list
    list with x elements, with each element being a list with y elements, with each elements being the given value
  
  Raises
  ------
  TypeError
    if the x or y parameters are not integers
  ValueError
    if the x or y parameters are not positive
  '''
  # code of function
  grid = []
  if isinstance(x, int) != True or isinstance(y, int) != True:
    raise TypeError("x and y inputs must be integers")
  elif x <= 0 or y <= 0:
    raise ValueError("x and y inputs must be POSITIVE integers")
  for j in range(x):
    temp = []
    for i in range(y):
      temp.append(value)
    grid.append(temp)

  return grid

def grid(list_parameter):

  '''
  Prints a two dimensional grid-like nested list in a grid format
  
  Two for loops, are used. One looping the given y amount of times, the other nested inside the other, looping x amount of times. This is so the first given index value corresponds with the 'x' of the grid. An empty list is created at the beginning of each outer loop, and within each nested loop, the given value is appended to the end of the list. The list is then printed the end of the outer loop. This function is used during debugging to print the "info" list. It can be reused in other programs as well. A limitation it has is that the list must be able to be printed into a perfect grid. That means every "y" element must have the same "x" amount of elements. 

  Parameters
  ----------
  list_parameter : list
    nested list function prints in grid-format
  
  Raises
  ------
  TypeError
    if the given parameter is not a list, or if its elements are not all lists
  IndexError
    if the nested lists are not the same length
  '''
  
  if isinstance(list_parameter, list) == False:
    raise TypeError("Inputed parrameter must be a list")
  for i in range(len(list_parameter)):
    if isinstance(list_parameter[i], list) == False:
      raise TypeError("Inputed parrameter must be a NESTED list")
  nested_list_length = len(list_parameter[0])
  for i in range(len(list_parameter)):
    if len(list_parameter[i]) != nested_list_length:
      raise IndexError("Nested list must all be same length")
    
  
  x = len(list_parameter)
  y = len(list_parameter[0])
  for j in range(y):
    #print(f"j is {j}")
    temp = ""
    
    for i in range(x):
      #print(f"i is {i}")
      temp += f"{list_parameter[i][j]}, \t"
    print(temp) 

# DO NOT USE FOR ASSESSMENT
def rgbtohex(r, g, b):
  '''
  Converts rgb values into its corresonding hex code
  
  Code from: https://stackoverflow.com/questions/51591456/can-i-use-rgb-in-tkinter

  Parameters
  ----------
  r : int
    red value of an rgb color system
  g : int
    green value of an rgb color system
  b : int
    blue value of an rgb color system
  
  Returns
  -------
  string
    String of the hex value of the given rgb parameters
  
  Raises
  ------
  TypeError
    if the rgb parameters are not integers
  ValueError
    if the rgb parameters are negative or below 256
  '''
  
  if isinstance(r, int)==False or isinstance(g, int)==False or isinstance(b, int)==False:
    return TypeError("rgb values must be integers")
  elif r < 0 or r >255 or g < 0 or g >255 or b < 0 or b >255:
    pass
    return ValueError("rgb values must be between 0 and 255")
  
  return f'#{r:02x}{g:02x}{b:02x}'

def constrain(value, min=0, max=100):
  '''
  Constrains a given value between a min and max
  
  Uses two if statements to check if value is out of range, and changes its value to its min/max if it is. The min value must be larger than the max value, and the value inputed must be a float or integer. 

  Parameters
  ----------
  value : int or float
    value being constrained
  min : int or float
    lower bound for the given value, default being 0
  max : int or float
    upper bound for the given value, default being 100
  
  Returns
  -------
  int or float
    value after being constrained to the min and max
  
  Raises
  ------
  TypeError
    if the x or y parameters are not integers or floats
  ValueError
    if the min value is larger than the max value
  '''
  
  if isinstance(value, (int, float)) == False or isinstance(min, (int, float)) == False or isinstance(max, (int, float)) == False:
    return TypeError("Value given, its min, and max, must be a NUMBER (integer or float)")
  elif min > max:
    return ValueError("The maximum value should be greater than the minimum value")
  # checks if value within bound before returning value
  if value > max:
    value = max
  elif value < min:
    value = min
  return value

# This is a Tkinter Function
def paint(event):
  '''
  Modifies info list to change color values
  
  Function runs when mouse left clicks. By using the mouse position, the region where the mouse is clicked is calculated, and its corresponding list of information is changed to match current color values provided by sliders. 

  Parameters
  ----------
  SKIPPED
  
  '''
  # when mouse clicks, changes corresponding pixel information to color slider values
  info[math.floor(event.x/size)][math.floor(event.y/size)] = [slider_r.get(), slider_g.get(), slider_b.get()]
  
# runs continuously
def refresh():
  '''
  Updates the pixel drawing every 1 second
  
  This function contains all code that should be continuously running. It updates the background color and pixel shape from the radio buttons, checks the current slider values, and redraws the pixels according to the updated information. At the end of function, root.after(1000, refresh) is used to run this function again after 1000 milliseconds. 

  '''
  
  # clears canvas
  canvas.delete('all')

  try: 
    # checks radio buttons for selected background color
    if select_background_color.get() == 0: 
      background_color = "black"
    elif select_background_color.get() == 1: 
      background_color = "white"
    else:
      background_color = "#d9d9d9"
  
    # updates background colors
    canvas.configure(bg = background_color)
  
    # updates slider colors
    display_color.config(bg = rgbtohex(slider_r.get(), slider_g.get(), slider_b.get()))

    # updates pixel color info list when mouse clicks
    canvas.bind("<Button-1>", paint)
    
    # This section is for drawing the pixels -------------------
    
    # nested for loop to iterate through all pixel data
    for j in range(0, x_pixels):
      for i in range(0, y_pixels): 
        # checks selected shape from radio button
        if selected_shape.get()==0:
          # draws pixels as rectangles
          canvas.create_rectangle(j*size, i*size, j*size+size, i*size+size, fill = rgbtohex(info[j][i][0], info[j][i][1], info[j][i][2]), outline = background_color)
        else:
          # draws pixels as circles
          canvas.create_oval(j*size, i*size, j*size+size, i*size+size, fill = rgbtohex(info[j][i][0], info[j][i][1], info[j][i][2]), outline = background_color)
    # ----------------------------------------------------------
    
  except NameError:
    print(f"Name Error: variable/object does not exist or is not defined")
  except TypeError as e:
    print(f"Type Error: something is probably wrong with the nested list")
  except ValueError as e:
    print(f"Value Error: most likely rgb values are out out of range")
  except IndexError as e:
    print(f"Index Error: Info list index out of range")
  except:
    print("Error: Something went wrong")
  else:
    
    # runs function again after 1000 seconds
    root.after(1000, refresh)
  

# Start of code --------------------------------------------------------------------

# recieve user inputs
start = "" 

# ensures program doesn't move on until user and program checks values
while start != "comfirm":
  valid = 0
  # checks if x input valid
  while valid==0: 
    x_pixels = input("Input x dimension: ")
    if x_pixels.isdigit() == False:  
      print("Please input an integer")
    elif int(x_pixels) > 16 or int(x_pixels) < 1:
      print("Please input an integer between 1 and 16 inclusive")
    else: 
      valid += 1
  # checks if y input valid
  while valid<2:
    y_pixels = input("Input y dimension: ")
    if  y_pixels.isdigit()!= True:
      print("Please input an integer")
    elif int(y_pixels)<=16 and int(y_pixels)>=1:
      valid+=1
    else: 
      print("Please input an integer between 1 and 16 inclusive")
      
  # informs user of their current inputs and comfirms with them
  print(f"Your canvas dimensions are {x_pixels} by {y_pixels}")
  start = input("Input 'Comfirm' to Continue: ").lower()

# convert inputed string to integer
x_pixels = int(x_pixels)
y_pixels = int(y_pixels)


# End of User Setup, Start of Tkinter Code ----------------------------------------------


# initialize tkinter
root = tk.Tk()

# setup window size
root.geometry("600x200")

# creates frame canvas 
Canvas = tk.Frame(root)
Canvas.grid(row=0, column=0)

# creates frame for sliders
color_options = tk.Frame(root)
color_options.grid(row=0, column=1)

# creates frame for radio buttons
Extra = tk.Frame(root)
Extra.grid(row=0, column=2)

# creates rgb sliders
slider_r = tk.Scale(color_options, from_=0, to=255, orient="horizontal")
slider_r.pack(padx = 10)
slider_g = tk.Scale(color_options, from_=0, to=255, orient="horizontal")
slider_g.pack(padx = 10)
slider_b = tk.Scale(color_options, from_=0, to=255, orient="horizontal")
slider_b.pack(padx = 10)

# label to display slider colors
display_color = tk.Label(color_options, text = "         ", bg = "black")
display_color.pack(side=tk.LEFT, padx = 10, pady = 15)


# radio buttons for pixel shape
selected_shape = tk.IntVar()
tk.Label(Extra, text = "Select Pixel Shape").pack()
tk.Radiobutton(Extra, text="square", variable=selected_shape, value=0).pack()
tk.Radiobutton(Extra, text="circle", variable=selected_shape, value=1).pack()

# radio buttons for background color
select_background_color = tk.IntVar()
tk.Label(Extra, text = "\nSelect Background Color").pack()
tk.Radiobutton(Extra, text="black", variable=select_background_color, value=0).pack()
tk.Radiobutton(Extra, text="white", variable=select_background_color, value=1).pack()
tk.Radiobutton(Extra, text="transparent", variable=select_background_color, value=2).pack()


# create canvas
canvas = tk.Canvas(Canvas, width=200, height=200)
canvas.pack()

try: 
  # creates nested list, with each element value containing the rgb for white
  info = setup_grid(x_pixels, y_pixels, [255, 255, 255]) 
  # calculuates pixel size
  size = 200/max(x_pixels, y_pixels) 
  # function for testing, prints the nested list created in setup
  
except NameError:
  print(f"Name Error: variable/object does not exist or is not defined")
except TypeError as e:
  print(f"Type Error: {e}")
except ValueError as e:
  print(f"Value Error: {e}")
except IndexError as e:
  print(f"Index Error: {e}")
except:
  print("Error: Something went wrong")

# code that runs continuously (Tkinter Function)
refresh()

# waits 
root.mainloop()