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

import sling
import sling.net
import sling.flags as flags
import sling.log as log

flags.define("--port",
             help="HTTP port",
             default=8080,
             type=int,
             metavar="PORT")

flags.parse()

# Initialize HTTP server.
app = sling.net.HTTPServer(flags.arg.port)

# Add static files.
app.static("/common", "app", internal=True)

# Run HTTP server.
log.info("HTTP server listening on port", flags.arg.port)
app.run()
log.info("Shutdown.")

