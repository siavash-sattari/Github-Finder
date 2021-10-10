class Github {
  constructor() {
    this.client_id = "Iv1.6facc82b9517112f";
    this.client_secret = "19a81a53696009b5841cc3ed35a6ea621c678f4d";
  }

  async getUser(username) {
    let responseProfile = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}
              &client_secret=${this.client_secret}`
    );

    let profile = await responseProfile.json();

    return {
      profile,
    };
  }
}
