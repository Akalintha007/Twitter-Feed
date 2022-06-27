const tweets = [
    {
        id: "63e510fc-6b71-4f4b-9116-c3a392b8c80b",
        body: "Former world number one Novak Djokovic will enter the grass-court Grand Slam as the defending champion.",
        date: "2022-06-23",
        read: true,
        authorId: "e89e3bf2-c72c-4c76-88fa-c320f8fd300b",
        statId: "0b39508-3554-4422-80e3-cdf4923514deb",
        metaId: "f44cd67b-4bf0-4d3a-858d-e4daade38075"
    },
    {
        id: "15bb6ff7-2498-4e6d-96e2-d62cb98a9f8f",
        body: "Sri Lanka and Australia face off in fourth One Day International",
        date: "2022-06-21",
        read: false,
        authorId: "ce9d45f0-bcd2-4bf0-b270-c5e7e87a410c",
        statId: "a82bb5e6-3e4e-40b0-82dd-7b8e37e3be97",
        metaId: "74467989-4f25-47f9-999a-00f96236c7b3"
    },
    {
        id: "15bb6ff7-2498-4e6d-96e2-d62cb98ak006",
        body: "We have updated our Player Cards guidelines. Quick overview and discussion in our developer forums:",
        date: "2022-07-08",
        read: true,
        authorId: "87f0c410-8175-4041-bb84-97038e864390",
        statId: "a82bb5e6-3e4e-40b0-82dd-7b8e37e3be97",
        metaId: "74467989-4f25-47f9-999a-00f96236c7b3"
    },
    {
        id: "15bb6ff7-2498-4e6d-96e2-d62cb98ak007",
        body: "Sri Lanka and Australia face off in fourth One Day International",
        date: "2022-08-20",
        read: true,
        authorId: "87f0c410-8175-4041-bb84-97038e864390",
        statId: "a82bb5e6-3e4e-40b0-82dd-7b8e37e3be97",
        metaId: "74467989-4f25-47f9-999a-00f96236c7b3"
    }
]

const users = [
    {
        id: "e89e3bf2-c72c-4c76-88fa-c320f8fd300b",
        username: "Joey_Tribbiani",
        first_name: "Joey",
        last_name: "Tribbiani",
        full_name: "Joey Tribbiani",
    },
    {
        id: "ce9d45f0-bcd2-4bf0-b270-c5e7e87a410c",
        username: "Phoebe_Buffay",
        first_name: "Phoebe",
        last_name: "Buffay",
        full_name: "Phoebe Buffay",
    },
    {
        id: "87f0c410-8175-4041-bb84-97038e864390",
        username: "Monica_Geller",
        first_name: "Monica",
        last_name: "Geller",
        full_name: "Monica Geller",
    }
]

const stats = [
    {
        id: "0b39508-3554-4422-80e3-cdf4923514deb",
        views: 234,
        likes: 10,
        retweets: 20,
        responses: 1
    },
    {
        id: "a82bb5e6-3e4e-40b0-82dd-7b8e37e3be97",
        views: 56,
        likes: 67,
        retweets: 99,
        responses: 34
    }
]

const meta = [ 
    {
        count: 4
    }
]

const notifications = [
    {
        id: "386d0dc8-28f1-4100-93e0-8ad63bdcaeda",
        date: "2022-06-22",
        type: "user-generated",
    },
    {
        id: "0f34b712-6eae-4df8-a14b-d2b2c6a30ca4",
        date: "2022-06-24",
        type: "push",
    }
]

exports.db = {
    tweets,
    users,
    stats,
    meta,
    notifications
}