# Copyright 2022 Ringgaard Research ApS
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http:#www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Homepage for ringgaard.com"""

import os
import sys
import time
import json

import sling
import sling.net
import sling.flags as flags
import sling.log as log
import sling.task.alert as alert

flags.define("--port",
             help="HTTP port",
             default=8080,
             type=int,
             metavar="PORT")

flags.parse()

# HTML page wrapers.

page_header = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name=viewport content="width=device-width, initial-scale=1">
<title>Ringgaard Research</title>
<link rel="icon" href="/common/image/appicon.ico" type="image/x-icon" />
<script type="module" src="/home/app/home.js"></script>
</head>
<body style="display: none;">
<home-header></home-header>
""";

page_footer = """
<home-footer></home-footer>
</body>
</html>
"""

# Initialize HTTP server.
app = sling.net.HTTPServer(flags.arg.port)

# Add static files.
app.static("/common", "app", internal=True)
app.static("/home/app", "app")
app.static("/home/image", "image")

# Conver unix epoch to RFC time.
def ts2rfc(t):
  return time.strftime("%a, %d %b %Y %H:%M:%S GMT", time.gmtime(t))

# Page template.
class PageTemplate:
 def __init__(self, template):
   self.template = template

# Generate HTML page for template.
@sling.net.response(PageTemplate)
def template_reponse(value, request, response):
  print("template:", value.template)

  # Read file content and timestamp.
  try:
    with open("page/" + value.template, "r") as f:
      content = f.read()
      st = os.fstat(f.fileno())
  except FileNotFoundError as e:
    log.error("not found:", value.template)
    return 404
  except PermissionError as e:
    log.error("access denied:", value.template)
    return 403
  except Exception as e:
    log.error("file error:", value.template, e)
    raise

  response.ct = "text/html"
  response["Last-Modified"] = ts2rfc(st.st_mtime)
  response.body = page_header + content + page_footer

# Page handler.
@app.route("/")
def template_page(request):
  template_name = request.path[1:]
  if len(template_name) == 0: template_name = "home"
  if not template_name.isalnum(): return 404
  return PageTemplate(template_name)

# Feedback handler.
@app.route("/home/feedback", method="POST")
def feedback_page(request):
  # Get feedback message.
  sender_email = request.param("sender")
  sender_name = request.param("name").replace("\n", " ")
  sender = sender_name + " <" + sender_email + ">"
  message = request.body.decode()

  # Send message alert.
  log.info("feedback from", sender_name, sender_email)
  alert.send("Feedback from " + sender_name, message, sender=sender)

# Run HTTP server.
log.info("HTTP server listening on port", flags.arg.port)
app.run()
log.info("Shutdown.")

