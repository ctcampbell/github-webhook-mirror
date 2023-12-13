# github-webhook-mirror

Sends a `repository_dispatch` event back to a GitHub repo when a webhook event is sent. This allows Actions to run on events that are not yet supported as direct triggers such as `code_scanning_alert`.

## Usage

1. Create an Azure Function App