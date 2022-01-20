import omit from "./index.js";

let obj = {
    id: 'ckym2djo10004y6pems7le575',
    email: 'kieran@dothq.co',
    pwd: '54e25d57b0f32085bb61df64a358916d9d0948a613ba7c04b27788f36ebaf385d5996ceb469fecef23b5c76a355b2dbab828be201b4ed82a6eedb33ffaeeda61',
    avatarProvider: null,
    createdAt: new Date("2022-01-19T22:47:12.339Z"),
    updatedAt: new Date("2022-01-19T22:47:12.339Z"),
    teams: [
      {
        id: 'ckyngkiii0024jipey0quj5og',
        name: 'wtf holy shit',
        type: 'SHARED',
        createdAt: new Date("2022-01-20T21:00:34.362Z"),
        updatedAt: new Date("2022-01-20T21:00:34.362Z"),
        members: [
            {
                id: 'ckym2djo10004y6pems7le575',
                email: 'kieran@dothq.co',
                pwd: '54e25d57b0f32085bb61df64a358916d9d0948a613ba7c04b27788f36ebaf385d5996ceb469fecef23b5c76a355b2dbab828be201b4ed82a6eedb33ffaeeda61',
                avatarProvider: null
            }
        ],
        permissions: [Array],
        projects: []
      }
    ],
    sessions: []
}

console.log(obj);

console.log(omit(obj, ["pwd"]));