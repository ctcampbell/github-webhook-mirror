import { Probot } from "probot";

export = (app: Probot) => {
  app.onAny(async (context: any) => {
    const octokit = await app.auth(context.payload.installation.id);
    if (context.payload.repository !== undefined) {
      await octokit.repos.createDispatchEvent({
        owner: context.payload.repository.owner.login,
        repo: context.payload.repository.name,
        event_type: context.name,
        client_payload: context.payload
      });
    }
  });
}
