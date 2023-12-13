# github-webhook-mirror

Sends a `repository_dispatch` event back to a GitHub repo when a webhook event is sent. This allows Actions to run on events that are not yet supported as direct triggers such as `code_scanning_alert`.

## Usage

### Create a GitHub app on your organisation

1. Set an appropriate name and Homepage URL

<img width="500" alt="Screenshot 2023-12-13 at 15 02 32" src="https://github.com/ctcampbell/github-webhook-mirror/assets/808531/05269b8f-a689-419f-bf8e-38cb73196411">

2. Uncheck the Webhook active checkbox, we will come back to this later

<img width="500" alt="Screenshot 2023-12-13 at 15 02 39" src="https://github.com/ctcampbell/github-webhook-mirror/assets/808531/b591d53b-f7ee-464d-a320-6195ee541b53">

3. Set the app permissions to allow `Read and write` for repository contents. This allows the Probot app to send `repository_dispatch` events to the source repository.

<img width="500" alt="Screenshot 2023-12-13 at 15 03 19" src="https://github.com/ctcampbell/github-webhook-mirror/assets/808531/42a5e5d7-025d-4650-ac10-40d2743457f0">

4. Generate a private key for the app.

<img width="500" alt="Screenshot 2023-12-13 at 15 03 51" src="https://github.com/ctcampbell/github-webhook-mirror/assets/808531/d77e3694-63b9-4814-bb77-9acb90683713">

5. Don't forget to install the app on an organisation.

<img width="500" alt="Screenshot 2023-12-13 at 16 15 01" src="https://github.com/ctcampbell/github-webhook-mirror/assets/808531/aa9984fc-7ffa-4602-8ebf-f2f516af1af1">


### Create an Azure Function App
