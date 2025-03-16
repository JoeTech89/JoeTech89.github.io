from pathlib import Path
from flask import Flask,render_template
import webbrowser
#________________________________________________
port=8080
host='0.0.0.0'
http=f"http://localhost:{port}"
adress='/'
url=f"{http}{adress}"
debug=False
#________________________________________________
#|______________________________________________|
app=Flask(__name__,template_folder=Path.cwd())
browser=webbrowser.get()
#________________________________________________
def load_html(path):
	content=f"<h1>Failed to Load {path}</h>"
	read_head=False
	try:
		with open(path,'r') as file:
			# content=file.read()
			content=''
			for line in file:
				if read_head==False:
					if str(line).startswith('<link rel="stylesheet" href="static/js/main.css">'):
						line="<link rel="+"stylesheet"+" href="+"{{url_for('static',filename='css/main.css') }}"+">"
			content+=f"{line}\n"
		print(content)
		return content

	except Error as e:
		print(f"Error:\t{e}")
	return content

#________________________________________________
@app.route('/')
def index():
	return render_template('index.html')


browser.open(url)
app.run(host=host,port=port,debug=debug)