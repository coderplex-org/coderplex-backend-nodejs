module.exports = function () {
	return function (hook) {
    // If there is a github field they signed up or
    // signed in with github so let's pull the email. If
    // console.log(hook.data)
		if (hook.data.github) {
			console.log('Customizing Github Profile');
			const profile = hook.data.github.profile;
			const emails = profile.emails.filter(email => email.primary);
			hook.data = {
				email: emails[0].value,
				avatarUrl: profile.photos[0].value,
				displayName: profile.displayName,
				username: profile.username,
				bio: profile._json.bio,
				hireable: profile._json.hireable,
				company: profile._json.company,
				location: profile._json.location,
				githubId: profile.id
			};
			hook.data.socialLinks = {
				github: profile.profileUrl,
				blog: profile._json.blog
			};
      // Console.log(hook.data)
      // throw new Error('Wait...')
		}

		if (hook.data.linkedin) {
			console.log('Customizing LinkedIn Profile');
      // Console.log(hook.data.linkedin.profile)
			const profile = hook.data.linkedin.profile;
			hook.data = {
				email: profile.emails[0].value,
				avatarUrl: profile.photos[0].value,
				displayName: profile.displayName,
				username: profile.displayName
          .split(' ')
          .join('')
          .toLowerCase(),
				bio: profile._json.summary,
				location: profile._json.location.name,
				linkedinId: profile.id
			};
			hook.data.socialLinks = {
				linkedin: profile._json.publicProfileUrl
			};
      // Console.log(hook.data)
		}
    // If you want to do something whenever any OAuth
    // provider authentication occurs you can do this.
		if (hook.params.oauth) {
      // Do something for all OAuth providers
		}

		if (hook.params.oauth.provider === 'github') {
      // Do something specific to the github provider
			console.log('LinkedIn Auth');
		}

		if (hook.params.oauth.provider === 'linkedin') {
      // Do something specific to the github provider
			console.log('LinkedIn Auth');
		}

		return Promise.resolve(hook);
	};
};
