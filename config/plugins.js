module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env('SMTP_PORT', 587),  
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom:  env('EMAIL_ADDRESS_FROM'),
          defaultReplyTo:  env('EMAIL_ADDRESS_REPLY'),
        },
      },
    },

      "netlify-deployments": {
        enabled: true,
        config: {
          accessToken: "fV4BTjRzTk5dFrzhczuZJ4PRhfFX_8hyoMI50TPjT9k",
          sites: [
            {
              name: 'strapibackend',
              id: "14bad8ee-daeb-4514-8111-95c1de0b34f4",
              buildHook: "https://api.netlify.com/build_hooks/639aea454c878d5cae5d1dd0",
              branch: 'master' // optional
            }
          ]
        },
      },

    // ...
  });