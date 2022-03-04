from chalice import Chalice
from urllib.parse import urlparse, parse_qsl

app = Chalice(app_name='slackbot')


@app.route('/', methods=['POST', 'GET'], content_types=['application/x-www-form-urlencoded', 'application/json'])
def index():
    r = dict(parse_qsl(app.current_request.raw_body.decode()))
    print(r)
    return {
        "response_type": "in_channel",
        "text": "You wrote {}".format(r['text'])
    }
    # print(r[1])
    return {'hello': 'world'}


# token=gIkuvaNzQIHg97ATvDxqgjtO
# &team_id=T0001
# &team_domain=example
# &enterprise_id=E0001
# &enterprise_name=Globular%20Construct%20Inc
# &channel_id=C2147483705
# &channel_name=test
# &user_id=U2147483697
# &user_name=Steve
# &command=/echo
# &text=94070
# &response_url=https://hooks.slack.com/commands/1234/5678
# &trigger_id=13345224609.738474920.8088930838d88f008e0
# &api_app_id=A123456



# The view function above will return {"hello": "world"}
# whenever you make an HTTP GET request to '/'.
#
# Here are a few more examples:
#
# @app.route('/hello/{name}')
# def hello_name(name):
#    # '/hello/james' -> {"hello": "james"}
#    return {'hello': name}
#
# @app.route('/users', methods=['POST'])
# def create_user():
#     # This is the JSON body the user sent in their POST request.
#     user_as_json = app.current_request.json_body
#     # We'll echo the json body back to the user in a 'user' key.
#     return {'user': user_as_json}
#
# See the README documentation for more examples.
#
