
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType, delay = 600) {
    var entities = JSON.parse(localStorage.getItem(entityType))
    if (!entities) {
        entities = _loadStays()
        _save(entityType, entities)
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('OOOOPs')
            resolve(entities)
        }, delay)
    })
    // return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}

function _loadStays() {
    return stays
}

const stays = [
    {
        "name": "Villa Luna at the Sumberkima Hill Retreat",
        "category": "Design",
        "summary": "Sumberkima is a seaside village next to Pemuteran close to Menjangan Island, diving and snorkeling paradise. It has diverse scenery and authentic culture steeped in tradition. Here you can truly relax away from the bustle of the south. The resort has panoramic views of the hills, the bay of Sumberkima and the volcanoes of Java. We have two restaurants at the retreat, serving local and international cuisines. Our reception team can organise all your excursions, yoga sessions and spa treatments",
        "roomType": "Entire place",
        "guests": 2,
        "bedrooms": 1,
        "beds": 1,
        "bath": 1,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Hair dryer",
            "Shampoo",
            "Hot water",
            "Essentials",
            "Air conditioning",
            "Fire extinguisher",
            "Private entrance",
            "Free parking on premises",
            "Hangers"
        ],
        "host": {
            "_id": "622f3403e66c58e6164faf93",
            "fullname": "Jane",
            "thumbnailUrl": "https://randomuser.me/api/portraits/women/55.jpg",
            "isSuperhost": true
        },
        "address": {
            "country": "Indonesia",
            "location": {
                "lat": -8.1681,
                "lng": 114.649
            },
            "city": "Bali",
            "countryCode": "US"
        },
        "price": 522,
        "reviewScores": {
            "Cleanliness": 4.8,
            "Accuracy": 4.9,
            "Communication": 4.9,
            "Location": 4.6,
            "Check-in": 4.9,
            "Value": 4.9,
            "Rating": 4.8
        },
        "reviews": [
            {
                "at": "Wed Jun 01 2022 23:21:49 GMT+0300 (Israel Daylight Time)",
                "by": {
                    "_id": "627f3437e36c59e4164fc004",
                    "fullname": "Yenny",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Super nice place to stay, definitely would come back again!"
            },
            {
                "at": "Wed Jun 01 2022 23:21:49 GMT+0300 (Israel Daylight Time)",
                "by": {
                    "_id": "v22f3403e31c59e6164fb204",
                    "fullname": "Mark",
                    "imgUrl": "https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/7_tf0fye.jpg",
                    "id": "70072865"
                },
                "txt": "This is possibly the most inspiring place we have ever stayed. They property and villa were incredible. The staff was very hospitable and the food and beverages from on site restaurants were phenomenal. We would highly recommend a stay here."
            },
            {
                "at": "Wed Jun 01 2022 23:21:49 GMT+0300 (Israel Daylight Time)",
                "by": {
                    "_id": "822f3501e36159e6164fb703",
                    "fullname": "Fadliyati",
                    "imgUrl": "https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/50_krqm1l.jpg",
                    "id": "71179725"
                },
                "txt": "The view from this villa is really amazing!And also the design from this villa beyond expectations especially about the lightings system is quite fun! I love this villa so much.Just be careful from bugs in the afternoon you should close the windows and all the door's room"
            },
            {
                "at": "Wed Jun 01 2022 23:21:49 GMT+0300 (Israel Daylight Time)",
                "by": {
                    "_id": "622f345ee36c5ve616xfb37f",
                    "fullname": "Steve",
                    "imgUrl": "https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/8_o4nctw.jpg",
                    "id": "65593239"
                },
                "txt": "One of the most incredible places I’ve ever stayed in. Magical setting, the most beautiful views and the villa is exquisite. The hospitality was amazing. Generally a perfect stay, will recommend to everybody and will be back."
            },
            {
                "at": "Wed Jun 01 2022 23:21:49 GMT+0300 (Israel Daylight Time)",
                "by": {
                    "_id": "622f3402e06c58e6165fb4.55",
                    "fullname": "Valentin",
                    "imgUrl": "https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/6_olv8j2.jpg",
                    "id": "26215688"
                },
                "txt": "A great place with a unique design and a great view. The service is at a good level. A little spoils the impression of Parking right under the window. I hope the management will take this into account."
            }
        ],
        "_id": "622f337a95c7d36e298zx8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653587279/Design/d12de01d-61ad-48eb-8def-e3208a669dcb_cnpzqu.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653587276/Design/187bf8a7-465c-436d-b751-47da4c20217b_gdz8ul.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653587276/Design/0657ee7f-c712-48a7-aa6c-713d59083645_ignrhk.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653587276/Design/783ca0d9-3ba5-48cb-af0c-f61cd74fa0d8_ssqjev.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653587275/Design/10aece9b-c7d2-476d-9e01-b1b1d47d017c_bal66n.webp"
        ]
    },
    {
        "name": "A Nice SeaCabin in a lovely Island with Nice View",
        "category": "Arctic",
        "summary": "We have now 7 seacabins/sjøhytter at Manshausen, and each one has a unique position and connection with nature.Everest is high up on top of a small hill and therefore has great views towards the Lofoten islands chain.Breakfast, served at Hovedhuset, the main house, is included on the reservation price.PLEASE TEXT ME BEFORE YOUR RESERVATION.THX",
        "roomType": "Private room",
        "guests": 4,
        "bedrooms": 2,
        "beds": 2,
        "bath": 2,
        "amenities": [
            "Shampoo",
            "Essentials",
            "Heating",
            "Wifi",
            "Kitchen",
            "Self check-in",
            "Smoke alarm",
            "Fire and kit",
            "Safe",
            "Dryer",
            "Dished and silverware"
        ],
        "host": {
            "_id": "622f3403e36c58e6164faf23",
            "fullname": "Kaisser",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/64.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Norway",
            "location": {
                "lat": 67.72244,
                "lng": 15.17717
            },
            "city": "Nordland",
            "countryCode": "NR"
        },
        "price": 759,
        "reviewScores": {
            "Cleanliness": 4.6,
            "Accuracy": 4.7,
            "Communication": 4.7,
            "Location": 4.9,
            "Check-in": 4.7,
            "Value": 4.7,
            "Rating": 4.7
        },
        "reviews": [
            {
                "at": "2022-03-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59e6164fc0x4",
                    "fullname": "Siobhan",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Great stay in a awesome location. With many special touches including games, fire places, informative books. Would stay again"
            },
            {
                "at": "2022-02-28T04:00:00.000Z",
                "by": {
                    "_id": "v22f3403e36c59e6164xb212",
                    "fullname": "Ben",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70072695"
                },
                "txt": "We spend one night in the dome and it was an amazing experience. Outside of the dome there is a brasero where we enjoyed a warm fire while watching the sunset. We had the feeling to be alone in the world only with nature around us. There is everything you need to cook and to eat inside. Lill Hilde and her husband are very friendly and nice, they were very caring of any of our well-being."
            },
            {
                "at": "2022-03-28T04:00:00.000Z",
                "by": {
                    "_id": "v22f3403e36c59e6164yb122",
                    "fullname": "Alexis",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70072813"
                },
                "txt": "Wondering place to stay, it’s a unique experience. I would definitely recommend. Lill has shared with us her love of the region, and made us feel very welcome!"
            },
            {
                "at": "2022-02-28T04:00:00.000Z",
                "by": {
                    "_id": "v22f3403e36c59e6164fb102",
                    "fullname": "Ulrike",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70072833"
                },
                "txt": "A great experience all around! The hosts picked us up from the camping spot and explained everything about the cabin. The small oven kept us warm through the cold and windy night. Seeing the northern lights while wrapped up in a cozy blanket is an experience noone should miss!"
            },
            {
                "at": "2022-02-28T04:00:00.000Z",
                "by": {
                    "_id": "v22f3403e36c59e6164fb702",
                    "fullname": "Deborah",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70072393"
                },
                "txt": "we had a great night! it was very cozy and beautiful :)"
            },
            {
                "at": "2022-02-28T04:00:00.000Z",
                "by": {
                    "_id": "v22f3403e36c59e6164fb151",
                    "fullname": "Jade",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70072993"
                },
                "txt": "After a long day driving we were delighted with the warm welcome we received from Lill. A beautiful location with everything provided for a great experience."
            },
            {
                "at": "2022-02-28T04:00:00.000Z",
                "by": {
                    "_id": "v22f3403e36c59e6164fb111",
                    "fullname": "Benedict",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70072093"
                },
                "txt": "Very friendly host and beautiful place"
            },
            {
                "at": "2022-02-28T04:00:00.000Z",
                "by": {
                    "_id": "v22f3403e36c59e6164fb031",
                    "fullname": "Silia",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70072003"
                },
                "txt": "Very welcoming host and a great experience where you feel in the middle of nature laying in an extremely comfortable bed with view of the ocean and the sky."
            },
            {
                "at": "2022-02-28T04:00:00.000Z",
                "by": {
                    "_id": "v22f3403e36c59e6164fb311",
                    "fullname": "Lone",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70070203"
                },
                "txt": "A unique experience where every minute you close your eyes feels like a waste of moments to enjoy the fact that you’re laying in an extremely comfortable bad overlooking the sea and the sky.Just fabulous"
            }
        ],
        "_id": "652f327a95c7d36e298aa8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653590616/arctic/00472c59-af5d-4656-aa0c-6a428179f394_l0mvfd.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653590616/arctic/1c2b5339-c51a-4c25-b644-732e6cfcec0d_u2egwh.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653590616/arctic/89f67fd5-d587-43c9-91a1-a96d02d2d46a_lan2mz.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653590616/arctic/29c0ba97-e47c-44a7-8bc2-0f2decdd9680_kpzjix.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653590615/arctic/b09ac654-7ec4-4644-a05d-49c625fc64fe_nr4o9p.webp"
        ]
    },
    {
        "name": "Olympia Seaview Villa",
        "category": "Amazing Pool",
        "summary": "Luxury Seaview Villa - 3 Levels with Elevator, A/C, Private Pool, Gym & Roof Top Terrace with Jacuzzi!",
        "roomType": "Entire place",
        "guests": 8,
        "bedrooms": 4,
        "beds": 4,
        "bath": 6,
        "amenities": [
            "Hair dryer",
            "Shampoo",
            "Hot water",
            "Shower gel",
            "Dryer",
            "Washer",
            "Essentials",
            "Air conditioning",
            "Safe",
            "Smoke alarm",
            "Kitchen",
            "Wifi",
            "Private entrance",
            "Wine glasses",
            "Free parking on premises"
        ],
        "host": {
            "_id": "622f3403e36c58e6164naf93",
            "fullname": "Best Holiday Homes Limited",
            "thumbnailUrl": "https://randomuser.me/api/portraits/women/45.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Cyprus",
            "location": {
                "lat": 34.992283,
                "lng": 34.014011
            },
            "city": "Ayia Napa",
            "countryCode": "CY"
        },
        "price": 672,
        "reviewScores": {
            "Cleanliness": 4.8,
            "Accuracy": 4.9,
            "Communication": 4.9,
            "Location": 4.6,
            "Check-in": 4.9,
            "Value": 4.9,
            "Rating": 4.8
        },
        "reviews": [
            {
                "at": "2021-06-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59x6164fc004",
                    "fullname": "Thomas",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "My family and I stayed in Zoe’s villa for two weeks in September we had previously seen pictures on website but upon arrival it surpassed our expectations it was absolutely stunning from the inside decor to the outside pool area and living area My family and I are already planning a return to Zoe’s villa as soon as we can, would highly recommend this villa for a family holiday you will not be disappointed thanks again Zoe for a great holiday"
            }
        ],
        "_id": "622f337a95c7d36e298qa8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653592010/amazing%20pools/1efcdba3-a770-4b0f-8f6e-aa31c20b01c4_lsbtge.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653592010/amazing%20pools/f23f8ce2-a632-4c41-8da6-564ae2a261e1_yapuem.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653592010/amazing%20pools/77131b37-3f52-4600-bb53-0c1346c04a53_u1rjhc.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653592011/amazing%20pools/934d8549-778a-4aa9-8130-27aaba40a8f5_n7vra1.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653592011/amazing%20pools/1250de38-b695-4188-9b61-1d061700a1b3_lxhsbz.webp"
        ]
    },
    {
        "name": "Lily Beach Resort & Spa, Maldives, With Pool, AI",
        "category": "Islands",
        "summary": "ALL INCLUSIVE RESORT AWARD WINNER Lily Beach is proud to have once again won the prestigious All Inclusive Resort Award this year.",
        "roomType": "Private room",
        "guests": 6,
        "bedrooms": 3,
        "beds": 3,
        "bath": 3,
        "amenities": [
            "Hair dryer",
            "Shampoo",
            "Essentials",
            "Hangers",
            "Hot water",
            "Shower gel",
            "TV",
            "Dryer",
            "Pool",
            "Air conditioning",
            "Safe",
            "Smoke alarm",
            "Wifi",
            "Freezer",
            "Private entrance",
            "Cooking basics",
            "Wine glasses",
            "Dining table",
            "Free parking on premises"
        ],
        "host": {
            "_id": "622f340we36c58e6164faf93",
            "fullname": "Dorothy",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/32.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Maldives",
            "location": {
                "lat": 1.924992,
                "lng": 73.399658
            },
            "city": "MV",
            "countryCode": "MV"
        },
        "price": 2587,
        "reviewScores": {
            "Accuracy": 4.9,
            "Cleanliness": 4.8,
            "Check-in": 4.9,
            "Communication": 4.9,
            "Location": 4.6,
            "Value": 4.9,
            "Rating": 4.8
        },
        "reviews": [
            {
                "at": "2022-05-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3497e36c59e6164fc013",
                    "fullname": "Cami",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Best place ever !!"
            },
            {
                "at": "2022-02-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3401e36c59e6164fc040",
                    "fullname": "Anne",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "The space is one-of-a-kind. Bird Island has comfortable sleeping accommodations, a fully stocked kitchen, activities galore, and every amenity you'll need for your stay. But, the hosts are the reason you should book - Ruth and Fred are communicative, professional, and warm. 100/10 recommend."
            },
            {
                "at": "2021-12-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407b36c59e6164fc010",
                    "fullname": "Justin",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "If you’re looking for a private full service resort, look elsewhere.If you’re looking for the most charming Glamping experience ever, you’ve hit the jackpot.This property is surrounded 360 degrees by a fabulous healthy thriving coral reef.It’s picturesque and nearly perfect.One week wasn’t enough.Fred, the owner could also not have been more helpful.I would definitely go back."
            },
            {
                "at": "2021-11-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407z36c59e6164fc040",
                    "fullname": "Marti",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "This island is the most phenomenal experience and year after year, Fred, Ruth and Leo outdo themselves upgrading the acre. The additions are amazing and well thought out. Everything is designed and staged to perfection, See you next December!"
            },
            {
                "at": "2021-10-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e56c59e6164fc440",
                    "fullname": "Barbara",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Always an awesome and too quick four days. One of my go to places to get away. Snorkeling is world class 👍"
            },
            {
                "at": "2021-12-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e16c59e6164fc010",
                    "fullname": "Alistair",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Great relaxing time at Bird Island, spectacular snorkeling around the atoll and relaxing afternoons in the hammocks watching the pelicans fish!"
            }
        ],
        "_id": "622f337a95c7d36e928aa8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653588627/islands/fa2ed873-e726-4e6d-ab1a-28bc7c69d805_ratn5t.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653588625/islands/972f11c0-c77d-4b5f-9329-675da599a34a_biyy6n.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653588628/islands/47ad716e-0a97-4c7e-9f0a-8bc7c09a3f9c_ekxu9s.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653588628/islands/a96633d6-f729-4365-9a69-b2e02037607a_hmpkgj.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653588625/islands/35d03179-3b9b-4898-b161-eb466bf533c6_dlwd62.webp"
        ]
    },
    {
        "name": "Tente Lodge 1 - Desert Luxury Experience",
        "category": "Desert",
        "summary": "Oxygen Lodge Agafay vous accueille dans l’atmosphère unique de ses tentes Lodge ainsi qu’autour de sa « Table perdue dans le Désert ».Nos tentes Lodge, aménagées en suites luxueuses, confortables et chauffées, disposent d’un lit double où twin, d’un espace salon avec canapé convertible en vrai lit, d’une salle de bain avec douche, de toilettes et dressing, d’une terrasse.",
        "roomType": "Entire place",
        "guests": 4,
        "bedrooms": 2,
        "beds": 4,
        "bath": 2,
        "amenities": [
            "Hair dryer",
            "Essentials",
            "Shampoo",
            "Cleaning products",
            "Hangers",
            "Hot water",
            "Shower gel",
            "TV",
            "Bed linens",
            "Safe",
            "Washer",
            "Air conditioning",
            "Safe",
            "Heating",
            "Smoke alarm"
        ],
        "host": {
            "_id": "622f3401e36c58e6164faf93",
            "fullname": "Oxygen Lodge",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/83.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Morocco",
            "location": {
                "lat": 31.628674,
                "lng": -7.992047
            },
            "city": "El Moukhtar",
            "countryCode": "MA"
        },
        "price": 1121,
        "reviewScores": {
            "Cleanliness": 5,
            "Accuracy": 5,
            "Communication": 5,
            "Location": 5,
            "Check-in": 5,
            "Value": 4.8,
            "Rating": 5
        },
        "reviews": [
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f4407e36c59e6164fc713",
                    "fullname": "Charlene",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Accueil extra, service extra, communication parfaite! Rien à redire notre séjour était parfait!!!!"
            },
            {
                "at": "2021-10-12T04:00:00.000Z",
                "by": {
                    "_id": "627z3407e36c59e6164fc170",
                    "fullname": "Alicia",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "If you are looking to stay at a desert retreat, look no farther. The best thing is you get the full Sahara glamping experience but only a couple hours outside of Marrakesh and Casablanca.The accommodations are gorgeous.So are the pool, fire pit, and lounge areas.The restaurant and tents are surrounded by lush plants in the front, making this a true oasis.The food at the restaurant was as excellent as the service.The preserved lemon and chicken tangine was the best we had had in Morocco.They also set up ATV and camel riding excursions for us.Both of these were set up with such ease and were so much fun!Our one regret was that we did not stay here long enough during our trip to Morocco."
            },
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627e3407e36c59e6164fc770",
                    "fullname": "Issam",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Excellent sejour, rien à dire ce fût vraiment un bonheur.L'équipe est top, au petit soin et très discrète.A faire sans aucune hésitations."
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "627o3407e36c59e6164fc770",
                    "fullname": "Melanie",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "C’est un endroit magnifique! Parfait pour se détendre autour de la piscine Nous avons eu un accueil parfait!La lodge est très propre, spacieuse et super jolie Je recommande Oxygen Lodge"
            }
        ],
        "_id": "622f337a95c7d36e298aa8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653593594/desert/02dac999-dcbb-450f-9cef-1751e44254d3_wo8lvf.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653593593/desert/aa10f9c5-483e-4870-8a8a-58b276188690_giccok.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653593592/desert/4eecb08d-3ce4-4964-9525-a7fa384b952c_bdqpma.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653593592/desert/0614e122-9634-4e59-852c-d95b5213f6ba_hdguz9.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653593592/desert/aa213bd2-5216-4f72-b76e-bb81e45d8ba7_aimykc.webp"
        ]
    },
    {
        "name": "Samujana Twenty-Four",
        "category": "Luxe",
        "summary": "The ideal spot for entertaining large groups, twenty-four is the biggest and most amenity filled villa in the Samujana development. Indoor and outdoor areas are spacious enough for a large amount of guests, merging seamlessly in an open concept design. Perfect for the sunrise and sunset, views from the terrace look out to the south and west over the Gulf of Thailand and all eight of the bedrooms have an amazing ocean view.",
        "roomType": "Private room",
        "guests": 16,
        "bedrooms": 8,
        "beds": 8,
        "bath": 10,
        "amenities": [
            "Bathub",
            "Shampoo",
            "Clothing storage",
            "Bed lines",
            "Kitchen",
            "Private pool",
            "Gym",
            "Free Parking on premises",
            "Wine glasses",
            "Sound system",
            "Air conditioning",
            "Body soap",
            "Hot Water",
            "Shower gel",
            "TV",
            "Wifi",
            "Heating",
            "Free street parking"
        ],
        "host": {
            "_id": "622f3403e3hc58e6164faf93",
            "fullname": "Nikki Maku",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/66.jpg",
            "isSuperhost": true
        },
        "address": {
            "country": "Thailand",
            "location": {
                "lat": 9.512017,
                "lng": 100.013596
            },
            "city": "Koh Samui",
            "countryCode": "TH"
        },
        "price": 2412,
        "reviewScores": {
            "Cleanliness": 5,
            "Accuracy": 5,
            "Communication": 5,
            "Location": 5,
            "Check-in": 5,
            "Value": 4.8,
            "Rating": 5
        },
        "reviews": [
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3427e36c59e6164fc713",
                    "fullname": "Isabella",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Great place!!!"
            },
            {
                "at": "2021-10-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3497e36c59e6164fc170",
                    "fullname": "Chichu",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Amp, our villa manager, was extremely helpful in arranging all the logistics for us and our housekeeping staff were the nicest, most skillful, and attentive people! We were all very impressed with them."
            }
        ],
        "_id": "622f337a95c7d36e29xaa8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653594454/lux/6934f1e4-e383-4bb7-97ef-709f47615fa0_zuexy3.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653594454/lux/6934f1e4-e383-4bb7-97ef-709f47615fa0_zuexy3.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653594453/lux/306f87d2-52ab-4df4-a5db-52cb6a471839_pzt1uh.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653594452/lux/83eda27f-50be-4356-8d74-0c40ef73226a_ibv2xm.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653594452/lux/7a1edc4f-3b35-4db9-ad8f-6504ff205b53_foszxn.webp"
        ]
    },
    {
        "name": "Mirror House South",
        "category": "Luxe",
        "summary": "The Mirror Houses are a pair of vacation homes, set in the marvellous surroundings of the South Tyrolean Dolomites, amidst a beautiful scenery of apple trees, just outside the city of Bolzano. The Mirror houses offer a unique chance to spend a beautiful vacation surrounded by contemporary architecture of the highest standards and the most astonishing Landscape and beauty nature has to offer.",
        "roomType": "Entire place",
        "guests": 4,
        "bedrooms": 1,
        "beds": 2,
        "bath": 2,
        "amenities": [
            "Hair dryer",
            "Hot water",
            "Essentials",
            "Shampoo",
            "Hangers",
            "Free parking on premises",
            "TV",
            "Private pool",
            "Air conditioning",
            "Kitchen",
            "Safe",
            "Heating",
            "Washer"
        ],
        "host": {
            "_id": "622f3403e36c52d6164faf93",
            "fullname": "Sabina Angela",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/70.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Italy",
            "location": {
                "lat": 46.5,
                "lng": 11.35
            },
            "city": "Bozlano",
            "countryCode": "IT"
        },
        "price": 465,
        "reviewScores": {
            "Cleanliness": 5,
            "Accuracy": 4.9,
            "Communication": 4.9,
            "Location": 4.7,
            "Check-in": 5,
            "Value": 4.8,
            "Rating": 4.9
        },
        "reviews": [
            {
                "at": "2022-05-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3405d36c59e6164fc713",
                    "fullname": "Yasmina",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Beautiful house in Bolzano surrounded by mountains and apple trees. We loved our stay and would definitely come back"
            },
            {
                "at": "2021-12-12T04:00:00.000Z",
                "by": {
                    "_id": "627f340z436c59e6614fc170",
                    "fullname": "Ahmed",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Great unique place to stay in quiet area with incredible design. Comfortable and great host that explained everything and helpful with great communication. Recommend everyone coming to Bolzano choose this place."
            },
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36w99e6164fc170",
                    "fullname": "Kyle",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "The mirror houses are a great and unique place to stay. You can’t go wrong staying here if you’re looking to explore the Dolomites, taste the amazing local cuisine or go shopping in Bolzano."
            },
            {
                "at": "2021-04-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36o29e6164fc770",
                    "fullname": "Thomas",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Beautiful mirror house. Hard to find definitely use (Hidden by Airbnb) maps! Places not open to late in area. Great communication and help finding it from host. Small but very peaceful and nice waking up to Mountain View’s. Would stay again!"
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36b59e6164fc770",
                    "fullname": "Mariya",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Amazing host with wonderful house. Loved our stay to the moon and back!"
            }
        ],
        "_id": "622f337a95c7d36p298aa8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653723585/lux/1/e0b2123a_original_leqvw4.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653723583/lux/1/46d207f2_original_iqtfis.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653723585/lux/1/309bee53-311d-4f07-a2e7-14daadbbfb77_m3joor.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653723585/lux/1/9815f41f_original_ytslyp.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653723584/lux/1/7186bb11_original_wf6yto.webp"
        ]
    },
    {
        "name": "Villa Blue Sea",
        "category": "National Parks",
        "summary": "Perched above the glorious southern coastline just outside of Skala village, the fabulous sea views from Blue Sea are appreciated from every level of this modern, charming house.This wonderful location is right on the seafront however, and the swimming pool and terrace at the front of the villa create a sublime skyline of pool and sea.The smart, informal décor of the interiors is welcoming and relaxed, just as a beachfront house should be, with browns and lilacs offering a pretty backdrop to the dramatic sea panoramas around the pool.The open plan living dining and kitchen area have patio doors that open out onto the terrace with a pergola offering shade over the outdoor dining area, perfect for leisurely lunches outdoors.The twin bedroom also opens onto the terrace and upstairs the lovely master bedroom has another seating area and a splendid glass panelled balcony that does justice to the vistas.",
        "roomType": "Entire place",
        "guests": 4,
        "bedrooms": 2,
        "beds": 3,
        "bath": 2,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Pool",
            "Free parking on premises",
            "Washer",
            "Hair dryer",
            "TV",
            "Heating",
            "Hangers",
            "Air conditioning"
        ],
        "host": {
            "_id": "622f3403e36c58e6264faf93",
            "fullname": "Constantinos",
            "thumbnailUrl": "https://randomuser.me/api/portraits/women/99.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Greece",
            "location": {
                "lat": 36.85,
                "lng": 22.66667
            },
            "city": "Skala",
            "countryCode": "GR"
        },
        "price": 389,
        "reviewScores": {
            "Cleanliness": 4.8,
            "Accuracy": 4.8,
            "Communication": 4.9,
            "Location": 4.7,
            "Check-in": 4.9,
            "Value": 4.9,
            "Rating": 4.8
        },
        "reviews": [
            {
                "at": "2022-05-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59e9164fd713",
                    "fullname": "Chandler",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Constantinos has been a great host, greeted us with a warm welcome ! Even checked us into his family hotel after check out which was lovely and spacious.The villa was amazing, good location, clean and the comfiest bed we have ever slept in on holiday .The villa was also very private with great views and lovely pool.We will definitely stay again!! Thank you Constantinos :),Amber & Chandler"
            },
            {
                "at": "2021-05-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59m6614fc170",
                    "fullname": "Melissa",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Constantinos has been such a great host! The place is incredible, walking distance to town, so many restaurants and beaches to go to. We had an amazing time exploring, hiking, renting boats, taking tours- it was truly incredible!"
            },
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59k6164fc170",
                    "fullname": "Lucas",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Great villa in quiet location just a short walk from town centre. Couple of bars and restaurants immediately out of Villa driveway too. Little beach outside too is great for a quiet morning swim. Villa itself is prestige, air con v. effective and comes with all expected amenities. We will be back!"
            },
            {
                "at": "2021-07-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c29e6164fc770",
                    "fullname": "Tristan",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Villa Blue Sea is a really nicely done place. There are 3 houses on the plot , all of which are very private, we stayed in the middle one as a family of 3. We felt like we could really relax there, the outdoor areas were really nice (outdoor shower very practical for rinsing off after the beach) the pool was kept super clean. The bedrooms were very comfortable and spacious.Its a short walk to Skala Beach and town, or drive just a few min.Skala has a nice laidback beachy vibe to it.There's even a little pebble beach directly opposite for a quick dip.Costas was really nice and made everything simple and efficient, dropped in to say hello when we arrived and gave us information about the area, was quick to respond to messages and available if we needed anything.We would definitely stay again in the future.Absolute recommendation !Thanks again Costas!"
            },
            {
                "at": "2020-10-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36y29e6164fc770",
                    "fullname": "Becky",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "We had a wonderful stay at Villa Blue Sea, the villa was lovely and Costas was an excellent host. The location was perfect with the bars and restaurants of Skala just a short walk away. The villa has excellent sea views which are perfect for watching the sun rise. We will definitely visit again!"
            },
            {
                "at": "2020-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59i3164fc770",
                    "fullname": "Rae",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "We had the most fabulous holiday. The villa is comfortable, chic, super clean and close to skala. Costas is a wonderful host. Will be back for the 180 degree ocean sunrises for sure."
            },
            {
                "at": "2020-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c53i6164fc770",
                    "fullname": "Victoria",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "La Villa es muy bonita, cuenta con todas las instalaciones para hacer una estancia muy agradable.Supermercados y restaurantes cerca.Excelente atención del anfitrión tanto antes de la llegada como durante la estancia."
            }
        ],
        "_id": "622f337a95c7d36e298ma8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653751571/national%20parks/a8f0f5c8-54eb-4fc2-bbb8-e465e74564ee_cquymo.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653751572/national%20parks/23cf8cb5-1937-4e5f-8000-7bf75ffa8f3a_dfpmwt.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653751572/national%20parks/c051c636-3a9d-4cf5-84de-c7226fc6bfd6_abjtqs.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653751570/national%20parks/57b06c3a-6c27-4852-bb12-8466ba50ca05_k2ox93.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653751569/national%20parks/6f7c91c1-08bc-44e6-8240-5e67f9ac71e7_ilytct.webp"
        ]
    },
    {
        "name": "Luxury My Villa Corfu by GHH",
        "category": "Luxe",
        "summary": "Villa Marion has the rare combination of being in a rural, secluded and private location.Sleeps 16 guests.8 double or twin bedrooms (four have doors or big windows onto pool area)2 Sitting rooms with open plan kitchens (2) and breakfast area 2 living rooms with doors onto terrace Playroom with doors onto terrace 6 bathrooms 2 Swimming pools 4 x 8m each, 2 pool showers Wooden decking Outside dining, BBQ Air Conditioning.",
        "roomType": "Entire place",
        "guests": 16,
        "bedrooms": 8,
        "beds": 8,
        "bath": 6,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Pool",
            "Free parking on premises",
            "Washer",
            "Hair dryer",
            "TV",
            "Heating",
            "Hangers",
            "Air conditioning",
            "Smoke alarm",
            "Self check-in"
        ],
        "host": {
            "_id": "622f3403e36x58e6264aaf93",
            "fullname": "Golden Home Holidays",
            "thumbnailUrl": "https://randomuser.me/api/portraits/women/29.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Greece",
            "location": {
                "lat": 36.85,
                "lng": 22.66667
            },
            "city": "Nisaki",
            "countryCode": "GR"
        },
        "price": 2144,
        "reviewScores": {
            "Cleanliness": 4.7,
            "Accuracy": 4.5,
            "Communication": 4.5,
            "Location": 4.7,
            "Check-in": 4.5,
            "Value": 4.3,
            "Rating": 4.5
        },
        "reviews": [
            {
                "at": "2022-04-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407y36c29e6164fd713",
                    "fullname": "Penni",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Beautiful home. I booked it with 10 of my friends for my birthday. Has great Features, like under floor heating. It has incredible views.We had issues with finding the villa.Using the location on Airbnb.We actually got lost.You can put the name of the villa into good maps and it will take you directly to the place.Also had a few small touches missing, but this did not Reduce from the experience."
            },
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407y36c59e5614fc170",
                    "fullname": "Tito",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Pictures are simply not enough. Incredible villa, stunning view, and amazing place overall. 10/10."
            },
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36t59e6162fc170",
                    "fullname": "Harry",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "The pictures do not do it justice! This place is paradise, me and my friends stayed here for a weekend and was blown away. Mira was always there for us whenever we needed something and the locals were all so welcoming. If you’re looking for the perfect getaway, this is your place."
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59e6164fx770",
                    "fullname": "Charlotte",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "What a fabulous holiday we had at My Villa Corfu!! The booking process was very straightforward and we were helped with booking cars and getting food in the villa prior to our arrival. On arrival we were greeted by our lovely host with fresh fruit and wine. She also helped us with restaurant bookings and even drove us to a few of them so we didn't get lost. Views from the villa were outstanding, I don't think they could have been any better. So lovely to watch the boats go by on an evening. Very spacious inside, if anything a lot of wasted space on the middle floor which we barely used. It was really very clean and simple inside which was great for us and the kids. It is actually 2 villas which have been incorporated outside and along the balconies into one villa but they are still separated inside, we didn't know this before we went but it actually worked well for us as we were 2 families. The only downside was they were 2 very small kitchens in each. Easy to get food shopping delivered to the supermarket by Aphrodite but I do believe you pay a premium for this so keep an eye out. She also has a gorgeous bakery next door to her shop."
            },
            {
                "at": "2020-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59e6164bc770",
                    "fullname": "Thi Minh Thuy",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "The view is stunning. We received a great welcoming, with fruits and glasses of wine. The road up the villa is a bit difficult, although the villa itself is spectacular."
            },
            {
                "at": "2020-07-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59e6164uc770",
                    "fullname": "Ofer",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "A beautiful and well maintained home in a location with amazing views.A problematic approach to minibuses and impossible for buses."
            }
        ],
        "_id": "622f337a95c7d36e298ai8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/a5cd56cb-1ddd-437b-bfbe-30422605f909_gxrq3a.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/29549a65-b06e-4a41-b58e-3bd54efc5295_df2orx.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/01f96423-76df-4bdd-a427-263e27250109_cmne74.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/177fbdf2-cd72-40bf-9444-e56869b384cd_tse805.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/df8ac158-7a43-4b5f-b226-8c5851eb6c93_bqicng.webp"
        ]
    },
    {
        "name": "Villa Arete - Luxury Villa by the Sea with swimming pool on Corfu Island",
        "category": "National Parks",
        "summary": "Villa Arete is a brand new property for the 2020 season, occupying a privileged location in the area of Perithia, on the sought after North-East coast of Corfu. Part of the exclusive “Perithia View” estate, this villa has been finished to the highest standard to offer a superior holiday experience to the most demanding guests. With 4 bedrooms, 4 bathrooms, extensive lounges and patios as well as private pool, tis villa ticks all the boxes. The elevated position (yet very close to amazing beaches) with 180 degrees panoramic views, offers the most amazing gift of the nature: the chance to admire, from the same property, both sunrise and sunset. In Villa Arete, every moment will be an experience to live and remember!",
        "roomType": "Shared room",
        "guests": 9,
        "bedrooms": 4,
        "beds": 7,
        "bath": 4,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Pool",
            "Dryer",
            "Hot water",
            "Free parking on premises",
            "Washer",
            "Hair dryer",
            "TV",
            "Long term stays allowed",
            "Heating",
            "Hangers",
            "Air conditioning"
        ],
        "host": {
            "_id": "622f3403e36c58e6164kaf91",
            "fullname": "Posarelli Villas",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/99.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Greece",
            "location": {
                "lat": 36.85,
                "lng": 22.66667
            },
            "city": "Pelekito",
            "countryCode": "GR"
        },
        "price": 527,
        "reviewScores": {
            "Cleanliness": 4.7,
            "Accuracy": 4.5,
            "Communication": 4.5,
            "Location": 4.7,
            "Check-in": 4.5,
            "Value": 4.3,
            "Rating": 4.5
        },
        "reviews": [
            {
                "at": "2022-05-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59w6164fd713",
                    "fullname": "Amie",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "our stay was amazing, the villa is beautiful , clean and just perfect.the area is a bit out of the way and have to get taxis everywhere due to being no roads to walk down, however 100% worth it Had a little problem finding the villa, as adress given didn’t come up on maps, but found from(Hidden by Airbnb) and wasn’t too bad once you knew where it was 10/10 would recommend for groups"
            },
            {
                "at": "2021-04-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3402v36c59e6614fc170",
                    "fullname": "Kim",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "perfect spot, exactly as detailed one slight challenge was the internet.very intermittant, however this is nothing to do with the villa just greece I think would definately recommend for a perfect holiday"
            },
            {
                "at": "2021-10-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36v59e6164fc170",
                    "fullname": "Harry",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "The villa is very neat, full of amenities. Great view and a large terrace. Each room has a bathroom. There are parking spaces on site. There's a small town near where there are supermarkets and restaurants. A great time with friends, I definitely recommend choosing this villa."
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407d36c59v6164fc770",
                    "fullname": "Miriam",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "We stayed in Arete Villa which was in the middle apartment of the 3. The views are absolutely stunning, pool was clean and external areas were 5*s. Overall the apartment was exceptionally clean, with perfect ‘chill’ areas to relax in. Kitchen was fully equipped and the beds were super comfy. Super close to restaurants and beaches, closest town was a 7 minute drive which was really lively. Will definitely stay again!"
            },
            {
                "at": "2020-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59w2164fc770",
                    "fullname": "Calliope",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Lovely villas with an amazing view and great pool. We really enjoyed our stay. A group of 8 friends and it was really comfortable particularly the outdoor space. Would definitely stay again!"
            },
            {
                "at": "2020-04-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59e1154fc770",
                    "fullname": "Krn",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Superbe villa, vue magnifique, design et écologique, propre, le personnel est très serviable et avenant. Très grand merci à eux."
            }
        ],
        "_id": "622f337a95c7d36e298ah8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653752657/national%20parks/2/cf1e587e-dee6-4d56-9564-add54fdf4e4a_bcd6po.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653752659/national%20parks/2/9f65aa94-5e1e-4fd2-a42e-37a5198d0f4c_qlr170.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653752658/national%20parks/2/fd71c787-6641-4026-8d71-19e197fec9d4_xy27c5.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653752658/national%20parks/2/fb8bcf3c-0e61-4478-a985-c8793adec149_u5mgcx.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653752657/national%20parks/2/8eafa096-aa8b-4ef4-921c-16f61f27b1c0_jnosdh.webp"
        ]
    },
    {
        "name": "Still Bend/Frank Lloyd Wright's Schwartz House",
        "category": "Design",
        "summary": "Featured on Netflix's THE WORLDS MOST AMAZING VACATION RENTALS Season 2, ep. 1. Still Bend/Bernard Schwartz House is Frank Lloyd Wright's built version of his Life Magazine Dream House design from 1938. The house is located on the East Twin River about a mile from Lake Michigan.",
        "roomType": "Private room",
        "guests": 6,
        "bedrooms": 4,
        "beds": 4,
        "bath": 3,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Pool",
            "Dryer",
            "Hot water",
            "Free parking on premises",
            "Washer",
            "Hair dryer",
            "TV",
            "Bed linens",
            "Heating",
            "Hangers",
            "Shampoo",
            "Air conditioning"
        ],
        "host": {
            "_id": "622f3403e36c58x6064aaf91",
            "fullname": "Michael",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/63.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "United States",
            "location": {
                "lat": 44.15388,
                "lng": -87.56925
            },
            "city": "Two Rivers",
            "countryCode": "US"
        },
        "price": 527,
        "reviewScores": {
            "Cleanliness": 4.7,
            "Accuracy": 4.9,
            "Communication": 4.9,
            "Location": 4.7,
            "Check-in": 4.5,
            "Value": 4.4,
            "Rating": 4.7
        },
        "reviews": [
            {
                "at": "2022-05-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c57x6164fd713",
                    "fullname": "Tonya",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "If there were more stars to give I’d give them. Unbelievably wonderful experience!!"
            },
            {
                "at": "2021-05-12T04:00:00.000Z",
                "by": {
                    "_id": "627x3400e36c59e6614fc170",
                    "fullname": "Gilbert",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Unique experience staying at a Frank Lloyd Wright home! Still Bend is a must-visit and must stay for all the art, design, and architecture junkies like us. The place looks good in photos, and wait till you see the actual house. It has everything you need, and Michael was such a fantastic host. There is so much places to visit which is 60-90 minutes away Two Rivers i.e. Door County, Kohler and Milwaukee! We will definitely try and visit again!"
            },
            {
                "at": "2021-10-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59e6164fc170",
                    "fullname": "Carrie",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "If you have an opportunity to book this home - do it! It is truly a rare gem that we feel so lucky to have gotten to stay in. Thank you! Staying here is like a warm hug for your soul. You cannot help but to slow down, breath, and marvel over the details and craftsmanship. It is clear from the moment you walk in that this home is lovingly cared for and that the owners take immense pride in making the space a wonderful experience for everyone who enters. Really just an incredible place to stay!"
            },
            {
                "at": "2021-04-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407d36c59e6164fw720",
                    "fullname": "Carolynn",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "The opportunity to stay in such a beautiful piece of history is rare. Thank you so much for sharing such an amazing property with myself and my family. The house was extremely clean and well equipped with what we needed. It was so fun to go around and look at the all the period pieces. Highly recommend you take the opportunity while you can."
            },
            {
                "at": "2020-04-12T04:00:00.000Z",
                "by": {
                    "_id": "625f2407e36c59e6164fc770",
                    "fullname": "Alice",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "We had a wonderful and relaxing stay at Still Bend. The house is incredible! We feel so fortunate to have stayed in a Frank Lloyd Wright masterpiece. The owners have done a fantastic job making their guests feel welcome. We didn't want to leave and hope to stay again in the near future."
            },
            {
                "at": "2020-05-12T04:00:00.000Z",
                "by": {
                    "_id": "621f3207e36c59e6164fc770",
                    "fullname": "Michelle",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "We absolutely loved the entire experience we had at this beautiful home! Perfect for girls getaway!"
            }
        ],
        "_id": "622f337a95c7d36e298ax0l8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653811319/Design/1/f1e4ab81-1dc2-402d-949f-0a8b9dfce968_q455di.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653811319/Design/1/fc12b9de-be10-4166-9666-159e78888c31_dgxq9y.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653811319/Design/1/eba677ba-646a-4708-87a8-0f04fa2beeae_fsov6c.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653811318/Design/1/c41a876f-83bf-419d-833f-83b973ee48b2_tjsf8y.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653811318/Design/1/987e689c-ab00-40be-90e4-7ced014cac2d_zsm1cp.webp"
        ]
    },
    {
        "name": "Villa Orion Magnificent SeaView",
        "category": "Design",
        "summary": "Villa 'Orion' is in Cavo Delos-Kanalia, just 10 minutes from the airport of Mykonos.The villa is situated on a 1000 m2 property with breath - taking view, it's coprised of a 100m2. house along with a 70 m2 fully equiped guest house. Also there is a new guest house of 50m2 fully equiped.",
        "roomType": "Entire place",
        "guests": 12,
        "bedrooms": 5,
        "beds": 8,
        "bath": 5,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Private Pool",
            "Dryer",
            "Hot water",
            "Free parking on premises",
            "Washer",
            "Hair dryer",
            "TV",
            "Bed linens",
            "Heating",
            "Pets allowed",
            "Security cameras on property",
            "Air conditioning"
        ],
        "host": {
            "_id": "622f3403e36c58x6064saf81",
            "fullname": "Nikolas",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/12.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Greece",
            "location": {
                "lat": 37.4467,
                "lng": 25.3289
            },
            "city": "Mykonos",
            "countryCode": "GR"
        },
        "price": 527,
        "reviewScores": {
            "Cleanliness": 4.7,
            "Accuracy": 4.7,
            "Communication": 4.5,
            "Location": 4.7,
            "Check-in": 4.7,
            "Value": 4.6,
            "Rating": 4.6
        },
        "reviews": [
            {
                "at": "2022-05-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3277x36c57x6164fd713",
                    "fullname": "Matthew",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Bless the Villa Orion! Amazing beautiful property, helpful and resourceful owners, all part of a perfect week in Mykonos. We would definitely stay here again and can’t imagine a better place."
            },
            {
                "at": "2021-04-12T04:00:00.000Z",
                "by": {
                    "_id": "627x3400e3x259e6614fc170",
                    "fullname": "Mike And Amber",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "This house was everything we wanted and more. The views, the outdoor space and the location were perfect. We were two families with 8 people in total and just the right amount of space. We hired Irine one day to cook lunch and dinner for us. Her and her husband provided amazing meals! The communication between the house manager was quick every time and got us everything and anything we could have wanted. We highly recommend this house."
            },
            {
                "at": "2021-10-12T04:00:00.000Z",
                "by": {
                    "_id": "627f340x036c59e6164fc170",
                    "fullname": "Kunal",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "The home was clean and the host was very responsive. The house is a bit out of the main towns so be sure to arrange car transfers to and form the villa. The view is amazing form the house and the pool deck area. The listing shows 2 guest houses but there was only 1 when we arrived."
            },
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407d36m59e6164fw720",
                    "fullname": "Iain",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "A beautiful place!! Highly recommended"
            },
            {
                "at": "2020-08-12T04:00:00.000Z",
                "by": {
                    "_id": "625f2407e36c59e6162lc770",
                    "fullname": "Shelby",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "This house has fantastic outside space for a group. They were so easy to Communicate with and helped us plan all transport, groceries etc.great stay."
            },
            {
                "at": "2020-10-12T04:00:00.000Z",
                "by": {
                    "_id": "621f3207e36c59e6114xc770",
                    "fullname": "Nandita",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "I can’t say enough good things about this villa. Beautiful set up, views, and very clean. The hosts were execrations and quick to answer and help us with all that we needed. Definitely get a car or ATV to get around but they can also help hook you up with a driver. Everything was perfect."
            },
            {
                "at": "2020-09-12T04:00:00.000Z",
                "by": {
                    "_id": "621f3702e36c59e6114xc770",
                    "fullname": "Michael",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "What an amazing experiance.. so greatful to have stayed at Anna and Nikolas’s beautiful villa.. amazing location so picturesque and had everything we needed. The owners and staff were very attentive and helped out with arranging wverything we needed fromredtaurant recommendations to transportation and beautiful chef dinner for a sunset bday. I will definitely love to visit again!!!"
            },
            {
                "at": "2020-09-12T04:00:00.000Z",
                "by": {
                    "_id": "621f3702e36c59e6104xc770",
                    "fullname": "Pamela",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "We had the best time at Villa Orion! The views were spectacular! The host goes beyond expectations to make you feel comfortable and help you with anything you need!"
            }
        ],
        "_id": "622f337a95c7d36i298ka8f8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653814479/Design/2/bfd756d8-4bb6-40eb-b22c-5ca20056ad00_gd1j6d.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653814479/Design/2/4bd6b4fc-012d-4481-bd5c-42eaf4292d86_clg2h9.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653814479/Design/2/a6edb65a-6cfc-453a-a1f4-3e5b16a87e46_hq0wah.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653814479/Design/2/883fcbc1-89d8-4864-8d65-d1fbf00215ed_f3zgb8.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653814478/Design/2/825ff49c-adb6-41c9-9083-ecb6d074f102_ue5puk.webp"
        ]
    },
    {
        "name": "9 Islands Suites-Vasilika Suite with Jacuzzi",
        "category": "Amazing Pool",
        "summary": "9 Islands Suites offers Suites of high aesthetic quality. Each Suite offers absolute privacy, a private terrace with sea and sunset view, air conditioning, coffee facilities, a satellite tv, a flat screen TV and a safe box.9 Islands also provides a stunning swimming pool, towels, free wi- fi and a free private parking area.The suites are located only 3 km away from Mykonos’ main town, 6 km away from the airport, 4 km away from the old port and are in the vicinity of many popular beaches.",
        "roomType": "Private room",
        "guests": 4,
        "bedrooms": 2,
        "beds": 2,
        "bath": 2,
        "amenities": [
            "Sea View",
            "Free parking on premises",
            "Wifi",
            "Private Pool",
            "Pets allowed",
            "Air conditioning",
            "Hot tub",
            "Washer",
            "Hair dryer",
            "Hangers",
            "Bed linens",
            "Shower gel",
            "Private entrance",
            "Security cameras on property"
        ],
        "host": {
            "_id": "622f3403e36c58x6014saf18",
            "fullname": "Panos",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/99.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Greece",
            "location": {
                "lat": 37.4467,
                "lng": 25.3289
            },
            "city": "Mykonos",
            "countryCode": "GR"
        },
        "price": 424,
        "reviewScores": {
            "Cleanliness": 4.9,
            "Accuracy": 4.7,
            "Communication": 4.5,
            "Location": 4.7,
            "Check-in": 4.8,
            "Value": 4.5,
            "Rating": 4.7
        },
        "reviews": [
            {
                "at": "2022-07-12T04:00:00.000Z",
                "by": {
                    "_id": "627x3117x36c57x6164fd713",
                    "fullname": "Isabella",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Our stay was wonderful! 9 islands is a beautiful boutique hotel and Panos was very attentive to us throughout our stay! We will definitely come back! We rented a car and all the main points of mykonos are a 10 minute drive from the hotel. The rooms are great and the view is wonderful."
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "627x3400x3x259e6614fc170",
                    "fullname": "Luca",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Good"
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "527f340x036c59e6164fc170",
                    "fullname": "Kristian",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "5 stars overall. Lovely place, and a great location. Panos was an excellent host very attentive to all of our questions and concerns. Quick replies and the cleaning lady was amazing! The hot tub was not completely private, it was more personal as we could see the other hot tub and room clearly across from us. Would highly recommend getting a 4WHEELER or any vehicle because taxis are expensive and it is about 10-15 minutes away from most attractions on the island."
            },
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "671f3407d26m59e6164fw720",
                    "fullname": "Jorge",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Spiros and his staff are amazing. You will not regret anything about this place only if you don’t stay long enough, a definitive recommendation and must come back."
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "625f2407e36c59e6162lc770",
                    "fullname": "Shani",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Perfect place. the view, the service, the design, the hospitality, the hosts are all amazing!!Definitely worth a stay!"
            }
        ],
        "_id": "622f337a95c7d36i298ke8x9",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653815812/amazing%20pools/1/fc2276da-c56e-460b-861b-d3e0d9e0e95d_e0l4bs.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653815812/amazing%20pools/1/01239335-24ec-4858-9d61-881f6e21632f_lj92xc.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653815812/amazing%20pools/1/aa3161ee-a1aa-4e8b-977b-119da52ebb0f_gfg0ht.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653815811/amazing%20pools/1/6eb185e9-64c8-4cf5-891b-d95d2ffc56b9_ewc7re.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653815811/amazing%20pools/1/1e333818-2696-49b9-a705-b5abe5f8874e_awssmm.webp"
        ]
    },
    {
        "name": "Villa Sawarin",
        "category": "Design",
        "summary": "Artfully designed by accomplished architects Jean-Michel Gathy and Phillipe Starck, Villa Sawarin is a perfect symbiosis of a contemporary and Thai style villa set in the exclusive private development of Phuket’s Cape Yamu. The most discerning world travelers will be impressed by its easy opulence and thoughtful attention to detail. Perfect for presidents – of nations and corporations – while still being family-friendly, the cathedral-like proportions of this beachfront mansion can easily host up to 18 guests.",
        "roomType": "Entire place",
        "guests": 16,
        "bedrooms": 9,
        "beds": 10,
        "bath": 10,
        "amenities": [
            "Kitchen",
            "Private pool",
            "Safe",
            "Wifi",
            "Dryer",
            "Hot water",
            "Free parking on premises",
            "Washer",
            "Hair dryer",
            "TV",
            "Bed linens",
            "Heating",
            "Hangers",
            "Shampoo",
            "Air conditioning"
        ],
        "host": {
            "_id": "622f3403e36c58x6064aaf91",
            "fullname": "Fran",
            "thumbnailUrl": "https://randomuser.me/api/portraits/men/16.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Thailand",
            "location": {
                "lat": 13.736717,
                "lng": 100.523186
            },
            "city": "Phuket",
            "countryCode": "TH"
        },
        "price": 2984,
        "reviewScores": {
            "Cleanliness": 4.9,
            "Accuracy": 4.8,
            "Communication": 4.9,
            "Location": 4.9,
            "Check-in": 4.8,
            "Value": 4.9,
            "Rating": 4.9
        },
        "reviews": [
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3402x36l57x6164fd713",
                    "fullname": "Fei",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Everything is perfect."
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "627x3401e36s59e6614fc170",
                    "fullname": "Adam",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Thank you Fran! It was terrific!"
            },
            {
                "at": "2021-10-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407e36c59e6464mc170",
                    "fullname": "Olayinka",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "If I could give a rating of six stars, I would. This was hands down the best Airbnb experience I have ever had. Fran is an outstanding host and the warmth she emanates through her communications is evident in the interior styling of her home. Set amidst a picturesque landscape that you can view from every room, the house is spacious and enveloped in timber with plush carpeting, luscious bedding, and an incredibly well-stocked kitchen, designed to entertain. The Wensley is synonymous with retreat – a place to unwind, laugh, eat, reflect, and enjoy the natural landscape. We hope to retreat at the Wensley again soon."
            },
            {
                "at": "2022-03-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407d36c59e6164fw720",
                    "fullname": "Kristy",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Do not hesitate and book The Wensley now!! The home is absolute design porn and situated on a gorgeous property. Location was great as it was about 20 minutes to the ocean and 15 to town. Such an amazing, relaxing stay for our family!! Everyone we know locally was so envious that we were staying on the property."
            },
            {
                "at": "2022-04-12T04:00:00.000Z",
                "by": {
                    "_id": "125f2407e36c59e6164fc770",
                    "fullname": "Kate",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "We went to The Wensley because we wished to live deliberately, to front only the essential facts of life, and see if we could not learn what it had to teach, and not, when we came to die, discover that we had not lived.Majestical!"
            },
            {
                "at": "2021-05-12T04:00:00.000Z",
                "by": {
                    "_id": "621f3207e30c59e6164fc770",
                    "fullname": "Michelle",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Absolutely exquisite! Such a special space"
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "621f3207e31c59p6164fp770",
                    "fullname": "Pat",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "The Wensley was the perfect place for a post lockdown catch up and more than made up for a few missed events. Fran is a great host who keeps things very relaxing. 😎"
            },
            {
                "at": "2021-11-12T04:00:00.000Z",
                "by": {
                    "_id": "621f3207p31c59p6164fp770",
                    "fullname": "Anna",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Fabulous experience.Surrounded by stunning views, super comfortable furnishings, beautifully styled, attention to detail for all your needs.Thankyou Fran for providing the whole package.Our own slice of paradise for the weekend ✨"
            }
        ],
        "_id": "622f337a95c7d36e298aa0i8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653819309/Design/3/201a00f9-0c23-4e75-9115-4ce1ceed05f6_bkyefc.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653819309/Design/3/da0ac469-edcf-418c-925d-adeb7bf6aec5_zyimnl.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653819309/Design/3/caac7192-a5d4-4ceb-9885-e22484132bd5_kwgcps.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653819309/Design/3/a8e43457-f768-4d5e-a676-c86a058cb190_oafrfa.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653819308/Design/3/bfd60bab-077f-4c32-94d5-f99d57808ef5_hf1wio.webp"
        ]
    },
    {
        "name": "Award Winning Designer home in Paddington",
        "category": "Design",
        "summary": "The Glass House won this years prestigious House & Garden Magazines Top 50 Rooms in Australia award for best furnishings and sets a new standard for inner city escapes.Built this year and finished in the highest finishes and most luxurious materials as an interior showhome it provides unparalleled luxury with heated marble floors, open fire, internal water feature, indoor & outdoor living areas and designer furniture & lighting throughout.",
        "roomType": "Entire place",
        "guests": 6,
        "bedrooms": 3,
        "beds": 3,
        "bath": 3,
        "amenities": [
            "Kitchen",
            "Wifi",
            "TV",
            "Dryer",
            "Safe",
            "Air conditioning",
            "Hot water",
            "Free parking on premises",
            "Security cameras on property",
            "Hair dryer",
            "Bed linens",
            "Hangers",
            "Heating"
        ],
        "host": {
            "_id": "622f3403e36c58x6064faf99",
            "fullname": "Nina",
            "thumbnailUrl": "https://randomuser.me/api/portraits/women/76.jpg",
            "isSuperhost": false
        },
        "address": {
            "country": "Australia",
            "location": {
                "lat": -31.840233,
                "lng": 145.612793
            },
            "city": "Darlinghurst",
            "countryCode": "AU"
        },
        "price": 982,
        "reviewScores": {
            "Cleanliness": 4.8,
            "Accuracy": 4.9,
            "Communication": 4.7,
            "Location": 4.9,
            "Check-in": 4.8,
            "Value": 4.9,
            "Rating": 4.8
        },
        "reviews": [
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3402x3l259x6164fd713",
                    "fullname": "Loretta",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "It was a beautiful and modern home; great hostess."
            },
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627x3411e36s59e6614fc170",
                    "fullname": "Lara",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "A gorgeous home and great to set up as an office for a week. Super clean and well appointed. We will be back"
            },
            {
                "at": "2021-09-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3400p36c59e6464mc170",
                    "fullname": "Paul",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Stylish house in a great location. Highly recommended."
            },
            {
                "at": "2021-12-12T04:00:00.000Z",
                "by": {
                    "_id": "627f3407d36c59e6164fw720",
                    "fullname": "Anuraag",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Amazing host and perfect villa! Nina did everything to make sure we were comfortable throughout the stay."
            },
            {
                "at": "2022-03-12T04:00:00.000Z",
                "by": {
                    "_id": "125f2407p36p59e6164fc770",
                    "fullname": "Charles",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "Outstanding. A truly amazing home. Stunningly designed. Superb hosts. A magical stay in Sydney."
            },
            {
                "at": "2021-05-12T04:00:00.000Z",
                "by": {
                    "_id": "621k2037e30c59e6164fc770",
                    "fullname": "James",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "We absolutely loved our stay at Nina’s property, it was just stunning, the most incredible house we have stayed in! The rooms are far more luxurious than any of the 5 star hotels in Sydney that we have stayed in before, and the design is incredible. The owners have furnished it with only the best of everything, from the beds to kitchen ware and linens. It was a very special treat for my wife and i to stay for the week and we were very sad to leave. The property is also very centrally located and we loved being able to walk to local shops and restaurants and being so close to the city, parks and beaches. We hope to come back! Thank you!"
            },
            {
                "at": "2021-08-12T04:00:00.000Z",
                "by": {
                    "_id": "621f3227e31c59p6164fp770",
                    "fullname": "Claire",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "A beautifully appointed apartment in a great central-east location. Staying in Nina's apartment was a much nicer experience than staying at any of the local luxury hotels. We're very much looking forward to staying here regularly."
            },
            {
                "at": "2021-11-12T04:00:00.000Z",
                "by": {
                    "_id": "621f3317p31c59p6164fp770",
                    "fullname": "Jess",
                    "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
                },
                "txt": "This place is absolutely superb the pictures don’t do it justice at all!It is like a private 5 star hotel right in the heart of Paddington, with great cafes just up the road.The house is beautifully appointed with heated stone floors and internal water feature, voice controlled lighting and a stunning fireplace and outdoor courtyard.Nina was the perfect host and I would love to stay again."
            }
        ],
        "_id": "622f337a95c7d31l298aa0i8",
        "imgUrls": [
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/e361efa5-eeda-430d-a591-f69b1915eb89_kdpkrx.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/76478995-a450-441b-bdb7-2a5cafb50f4f_obczvk.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/40217c0d-7c1b-4668-865d-9b539d8dc26e_zhjzmv.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/79500c7f-4ffc-4474-8885-48126190360a_ssuh2k.webp",
            "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/17c07b42-b0df-46a8-b397-f0824f7add20_ebnbmh.webp"
        ]
    }
]

// const stays = [
//     {
//         "name": "Villa Luna at the Sumberkima Hill Retreat",
//         "category": "Design",
//         "summary": "Sumberkima is a seaside village next to Pemuteran close to Menjangan Island, diving and snorkeling paradise. It has diverse scenery and authentic culture steeped in tradition. Here you can truly relax away from the bustle of the south. The resort has panoramic views of the hills, the bay of Sumberkima and the volcanoes of Java. We have two restaurants at the retreat, serving local and international cuisines. Our reception team can organise all your excursions, yoga sessions and spa treatments",
//         "roomType": "Entire place",
//         "guests": 2,
//         "bedrooms": 1,
//         "beds": 1,
//         "bath": 1,
//         "amenities": [
//             "Wifi",
//             "Kitchen",
//             "Hair dryer",
//             "Shampoo",
//             "Hot water",
//             "Essentials",
//             "Air conditioning",
//             "Fire extinguisher",
//             "Private entrance",
//             "Free parking on premises",
//             "Hangers"
//         ],
//         "host": {
//             "_id": "622f3403e66c58e6164faf93",
//             "fullname": "Jane",
//             "thumbnailUrl": "https://res.cloudinary.com/dys1y33zj/image/upload/v1653814933/9_a5udyr.jpg",
//             "isSuperhost": true
//         },
//         "address": {
//             "country": "Indonesia",
//             "location": {
//                 "lat": -8.1681,
//                 "lng": 114.649
//             },
//             "city": "Bali",
//             "countryCode": "US"
//         },
//         "price": 522,
//         "reviewScores": {
//             "Cleanliness": 4.8,
//             "Accuracy": 4.9,
//             "Communication": 4.9,
//             "Location": 4.6,
//             "Check-in": 4.9,
//             "Value": 4.9,
//             "Rating": 4.8
//         },
//         "reviews": [
//             {
//                 "at": "2021-06-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3437e36c59e4164fc004",
//                     "fullname": "Yenny",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Super nice place to stay, definitely would come back again!"
//             },
//             {
//                 "at": "2021-07-28T04:00:00.000Z",
//                 "by": {
//                     "_id": "v22f3403e31c59e6164fb204",
//                     "fullname": "Mark",
//                     "imgUrl": "https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/7_tf0fye.jpg",
//                     "id": "70072865"
//                 },
//                 "txt": "This is possibly the most inspiring place we have ever stayed. They property and villa were incredible. The staff was very hospitable and the food and beverages from on site restaurants were phenomenal. We would highly recommend a stay here."
//             },
//             {
//                 "at": "2020-09-11T04:00:00.000Z",
//                 "by": {
//                     "_id": "822f3501e36159e6164fb703",
//                     "fullname": "Fadliyati",
//                     "imgUrl": "https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/50_krqm1l.jpg",
//                     "id": "71179725"
//                 },
//                 "txt": "The view from this villa is really amazing!And also the design from this villa beyond expectations especially about the lightings system is quite fun! I love this villa so much.Just be careful from bugs in the afternoon you should close the windows and all the door's room"
//             },
//             {
//                 "at": "2020-01-07T05:00:00.000Z",
//                 "by": {
//                     "_id": "622f345ee36c5ve616xfb37f",
//                     "fullname": "Steve",
//                     "imgUrl": "https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/8_o4nctw.jpg",
//                     "id": "65593239"
//                 },
//                 "txt": "One of the most incredible places I’ve ever stayed in. Magical setting, the most beautiful views and the villa is exquisite. The hospitality was amazing. Generally a perfect stay, will recommend to everybody and will be back."
//             },
//             {
//                 "at": "2020-04-07T04:00:00.000Z",
//                 "by": {
//                     "_id": "622f3402e06c58e6165fb4.55",
//                     "fullname": "Valentin",
//                     "imgUrl": "https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/6_olv8j2.jpg",
//                     "id": "26215688"
//                 },
//                 "txt": "A great place with a unique design and a great view. The service is at a good level. A little spoils the impression of Parking right under the window. I hope the management will take this into account."
//             }
//         ],
//         "_id": "622f337a95c7d36e298zx8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653587279/Design/d12de01d-61ad-48eb-8def-e3208a669dcb_cnpzqu.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653587276/Design/187bf8a7-465c-436d-b751-47da4c20217b_gdz8ul.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653587276/Design/0657ee7f-c712-48a7-aa6c-713d59083645_ignrhk.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653587276/Design/783ca0d9-3ba5-48cb-af0c-f61cd74fa0d8_ssqjev.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653587275/Design/10aece9b-c7d2-476d-9e01-b1b1d47d017c_bal66n.webp"
//         ]
//     },
//     {
//         "name": "A Nice SeaCabin in a lovely Island with Nice View",
//         "category": "Arctic",
//         "summary": "We have now 7 seacabins/sjøhytter at Manshausen, and each one has a unique position and connection with nature.Everest is high up on top of a small hill and therefore has great views towards the Lofoten islands chain.Breakfast, served at Hovedhuset, the main house, is included on the reservation price.PLEASE TEXT ME BEFORE YOUR RESERVATION.THX",
//         "roomType": "Private room",
//         "guests": 4,
//         "bedrooms": 2,
//         "beds": 2,
//         "bath": 2,
//         "amenities": [
//             "Shampoo",
//             "Essentials",
//             "Heating",
//             "Wifi",
//             "Kitchen",
//             "Self check-in",
//             "Smoke alarm",
//             "Fire and kit",
//             "Safe",
//             "Dryer",
//             "Dished and silverware"
//         ],
//         "host": {
//             "_id": "622f3403e36c58e6164faf23",
//             "fullname": "Kaisser",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Norway",
//             "location": {
//                 "lat": 67.72244,
//                 "lng": 15.17717
//             },
//             "city": "Nordland",
//             "countryCode": "NR"
//         },
//         "price": 759,
//         "reviewScores": {
//             "Cleanliness": 4.6,
//             "Accuracy": 4.7,
//             "Communication": 4.7,
//             "Location": 4.9,
//             "Check-in": 4.7,
//             "Value": 4.7,
//             "Rating": 4.7
//         },
//         "reviews": [
//             {
//                 "at": "2022-03-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59e6164fc0x4",
//                     "fullname": "Siobhan",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Great stay in a awesome location. With many special touches including games, fire places, informative books. Would stay again"
//             },
//             {
//                 "at": "2022-02-28T04:00:00.000Z",
//                 "by": {
//                     "_id": "v22f3403e36c59e6164xb212",
//                     "fullname": "Ben",
//                     "imgUrl": "https://robohash.org/70072865?set=set1",
//                     "id": "70072695"
//                 },
//                 "txt": "We spend one night in the dome and it was an amazing experience. Outside of the dome there is a brasero where we enjoyed a warm fire while watching the sunset. We had the feeling to be alone in the world only with nature around us. There is everything you need to cook and to eat inside. Lill Hilde and her husband are very friendly and nice, they were very caring of any of our well-being."
//             },
//             {
//                 "at": "2022-03-28T04:00:00.000Z",
//                 "by": {
//                     "_id": "v22f3403e36c59e6164yb122",
//                     "fullname": "Alexis",
//                     "imgUrl": "https://robohash.org/70072865?set=set1",
//                     "id": "70072813"
//                 },
//                 "txt": "Wondering place to stay, it’s a unique experience. I would definitely recommend. Lill has shared with us her love of the region, and made us feel very welcome!"
//             },
//             {
//                 "at": "2022-02-28T04:00:00.000Z",
//                 "by": {
//                     "_id": "v22f3403e36c59e6164fb102",
//                     "fullname": "Ulrike",
//                     "imgUrl": "https://robohash.org/70072865?set=set1",
//                     "id": "70072833"
//                 },
//                 "txt": "A great experience all around! The hosts picked us up from the camping spot and explained everything about the cabin. The small oven kept us warm through the cold and windy night. Seeing the northern lights while wrapped up in a cozy blanket is an experience noone should miss!"
//             },
//             {
//                 "at": "2022-02-28T04:00:00.000Z",
//                 "by": {
//                     "_id": "v22f3403e36c59e6164fb702",
//                     "fullname": "Deborah",
//                     "imgUrl": "https://robohash.org/70072865?set=set1",
//                     "id": "70072393"
//                 },
//                 "txt": "we had a great night! it was very cozy and beautiful :)"
//             },
//             {
//                 "at": "2022-02-28T04:00:00.000Z",
//                 "by": {
//                     "_id": "v22f3403e36c59e6164fb151",
//                     "fullname": "Jade",
//                     "imgUrl": "https://robohash.org/70072865?set=set1",
//                     "id": "70072993"
//                 },
//                 "txt": "After a long day driving we were delighted with the warm welcome we received from Lill. A beautiful location with everything provided for a great experience."
//             },
//             {
//                 "at": "2022-02-28T04:00:00.000Z",
//                 "by": {
//                     "_id": "v22f3403e36c59e6164fb111",
//                     "fullname": "Benedict",
//                     "imgUrl": "https://robohash.org/70072865?set=set1",
//                     "id": "70072093"
//                 },
//                 "txt": "Very friendly host and beautiful place"
//             },
//             {
//                 "at": "2022-02-28T04:00:00.000Z",
//                 "by": {
//                     "_id": "v22f3403e36c59e6164fb031",
//                     "fullname": "Silia",
//                     "imgUrl": "https://robohash.org/70072865?set=set1",
//                     "id": "70072003"
//                 },
//                 "txt": "Very welcoming host and a great experience where you feel in the middle of nature laying in an extremely comfortable bed with view of the ocean and the sky."
//             },
//             {
//                 "at": "2022-02-28T04:00:00.000Z",
//                 "by": {
//                     "_id": "v22f3403e36c59e6164fb311",
//                     "fullname": "Lone",
//                     "imgUrl": "https://robohash.org/70072865?set=set1",
//                     "id": "70070203"
//                 },
//                 "txt": "A unique experience where every minute you close your eyes feels like a waste of moments to enjoy the fact that you’re laying in an extremely comfortable bad overlooking the sea and the sky.Just fabulous"
//             }
//         ],
//         "_id": "652f327a95c7d36e298aa8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653590616/arctic/00472c59-af5d-4656-aa0c-6a428179f394_l0mvfd.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653590616/arctic/1c2b5339-c51a-4c25-b644-732e6cfcec0d_u2egwh.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653590616/arctic/89f67fd5-d587-43c9-91a1-a96d02d2d46a_lan2mz.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653590616/arctic/29c0ba97-e47c-44a7-8bc2-0f2decdd9680_kpzjix.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653590615/arctic/b09ac654-7ec4-4644-a05d-49c625fc64fe_nr4o9p.webp"
//         ]
//     },
//     {
//         "name": "Olympia Seaview Villa",
//         "category": "Amazing Pool",
//         "summary": "Luxury Seaview Villa - 3 Levels with Elevator, A/C, Private Pool, Gym & Roof Top Terrace with Jacuzzi!",
//         "roomType": "Entire place",
//         "guests": 8,
//         "bedrooms": 4,
//         "beds": 4,
//         "bath": 6,
//         "amenities": [
//             "Hair dryer",
//             "Shampoo",
//             "Hot water",
//             "Shower gel",
//             "Dryer",
//             "Washer",
//             "Essentials",
//             "Air conditioning",
//             "Safe",
//             "Smoke alarm",
//             "Kitchen",
//             "Wifi",
//             "Private entrance",
//             "Wine glasses",
//             "Free parking on premises"
//         ],
//         "host": {
//             "_id": "622f3403e36c58e6164naf93",
//             "fullname": "Best Holiday Homes Limited",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Cyprus",
//             "location": {
//                 "lat": 34.992283,
//                 "lng": 34.014011
//             },
//             "city": "Ayia Napa",
//             "countryCode": "CY"
//         },
//         "price": 672,
//         "reviewScores": {
//             "Cleanliness": 4.8,
//             "Accuracy": 4.9,
//             "Communication": 4.9,
//             "Location": 4.6,
//             "Check-in": 4.9,
//             "Value": 4.9,
//             "Rating": 4.8
//         },
//         "reviews": [
//             {
//                 "at": "2021-06-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59x6164fc004",
//                     "fullname": "Thomas",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "My family and I stayed in Zoe’s villa for two weeks in September we had previously seen pictures on website but upon arrival it surpassed our expectations it was absolutely stunning from the inside decor to the outside pool area and living area My family and I are already planning a return to Zoe’s villa as soon as we can, would highly recommend this villa for a family holiday you will not be disappointed thanks again Zoe for a great holiday"
//             }
//         ],
//         "_id": "622f337a95c7d36e298qa8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653592010/amazing%20pools/1efcdba3-a770-4b0f-8f6e-aa31c20b01c4_lsbtge.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653592010/amazing%20pools/f23f8ce2-a632-4c41-8da6-564ae2a261e1_yapuem.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653592010/amazing%20pools/77131b37-3f52-4600-bb53-0c1346c04a53_u1rjhc.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653592011/amazing%20pools/934d8549-778a-4aa9-8130-27aaba40a8f5_n7vra1.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653592011/amazing%20pools/1250de38-b695-4188-9b61-1d061700a1b3_lxhsbz.webp"
//         ]
//     },
//     {
//         "name": "Lily Beach Resort & Spa, Maldives, With Pool, AI",
//         "category": "Islands",
//         "summary": "ALL INCLUSIVE RESORT AWARD WINNER Lily Beach is proud to have once again won the prestigious All Inclusive Resort Award this year.",
//         "roomType": "Private room",
//         "guests": 6,
//         "bedrooms": 3,
//         "beds": 3,
//         "bath": 3,
//         "amenities": [
//             "Hair dryer",
//             "Shampoo",
//             "Essentials",
//             "Hangers",
//             "Hot water",
//             "Shower gel",
//             "TV",
//             "Dryer",
//             "Pool",
//             "Air conditioning",
//             "Safe",
//             "Smoke alarm",
//             "Wifi",
//             "Freezer",
//             "Private entrance",
//             "Cooking basics",
//             "Wine glasses",
//             "Dining table",
//             "Free parking on premises"
//         ],
//         "host": {
//             "_id": "622f340we36c58e6164faf93",
//             "fullname": "Dorothy",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Maldives",
//             "location": {
//                 "lat": 1.924992,
//                 "lng": 73.399658
//             },
//             "city": "MV",
//             "countryCode": "MV"
//         },
//         "price": 2587,
//         "reviewScores": {
//             "Accuracy": 4.9,
//             "Cleanliness": 4.8,
//             "Check-in": 4.9,
//             "Communication": 4.9,
//             "Location": 4.6,
//             "Value": 4.9,
//             "Rating": 4.8
//         },
//         "reviews": [
//             {
//                 "at": "2022-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3497e36c59e6164fc013",
//                     "fullname": "Cami",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Best place ever !!"
//             },
//             {
//                 "at": "2022-02-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3401e36c59e6164fc040",
//                     "fullname": "Anne",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "The space is one-of-a-kind. Bird Island has comfortable sleeping accommodations, a fully stocked kitchen, activities galore, and every amenity you'll need for your stay. But, the hosts are the reason you should book - Ruth and Fred are communicative, professional, and warm. 100/10 recommend."
//             },
//             {
//                 "at": "2021-12-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407b36c59e6164fc010",
//                     "fullname": "Justin",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "If you’re looking for a private full service resort, look elsewhere.If you’re looking for the most charming Glamping experience ever, you’ve hit the jackpot.This property is surrounded 360 degrees by a fabulous healthy thriving coral reef.It’s picturesque and nearly perfect.One week wasn’t enough.Fred, the owner could also not have been more helpful.I would definitely go back."
//             },
//             {
//                 "at": "2021-11-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407z36c59e6164fc040",
//                     "fullname": "Marti",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "This island is the most phenomenal experience and year after year, Fred, Ruth and Leo outdo themselves upgrading the acre. The additions are amazing and well thought out. Everything is designed and staged to perfection, See you next December!"
//             },
//             {
//                 "at": "2021-10-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e56c59e6164fc440",
//                     "fullname": "Barbara",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Always an awesome and too quick four days. One of my go to places to get away. Snorkeling is world class 👍"
//             },
//             {
//                 "at": "2021-12-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e16c59e6164fc010",
//                     "fullname": "Alistair",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Great relaxing time at Bird Island, spectacular snorkeling around the atoll and relaxing afternoons in the hammocks watching the pelicans fish!"
//             }
//         ],
//         "_id": "622f337a95c7d36e928aa8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653588627/islands/fa2ed873-e726-4e6d-ab1a-28bc7c69d805_ratn5t.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653588625/islands/972f11c0-c77d-4b5f-9329-675da599a34a_biyy6n.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653588628/islands/47ad716e-0a97-4c7e-9f0a-8bc7c09a3f9c_ekxu9s.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653588628/islands/a96633d6-f729-4365-9a69-b2e02037607a_hmpkgj.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653588625/islands/35d03179-3b9b-4898-b161-eb466bf533c6_dlwd62.webp"
//         ]
//     },
//     {
//         "name": "Tente Lodge 1 - Desert Luxury Experience",
//         "category": "Desert",
//         "summary": "Oxygen Lodge Agafay vous accueille dans l’atmosphère unique de ses tentes Lodge ainsi qu’autour de sa « Table perdue dans le Désert ».Nos tentes Lodge, aménagées en suites luxueuses, confortables et chauffées, disposent d’un lit double où twin, d’un espace salon avec canapé convertible en vrai lit, d’une salle de bain avec douche, de toilettes et dressing, d’une terrasse.",
//         "roomType": "Entire place",
//         "guests": 4,
//         "bedrooms": 2,
//         "beds": 4,
//         "bath": 2,
//         "amenities": [
//             "Hair dryer",
//             "Essentials",
//             "Shampoo",
//             "Cleaning products",
//             "Hangers",
//             "Hot water",
//             "Shower gel",
//             "TV",
//             "Bed linens",
//             "Safe",
//             "Washer",
//             "Air conditioning",
//             "Safe",
//             "Heating",
//             "Smoke alarm"
//         ],
//         "host": {
//             "_id": "622f3401e36c58e6164faf93",
//             "fullname": "Oxygen Lodge",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Morocco",
//             "location": {
//                 "lat": 31.628674,
//                 "lng": -7.992047
//             },
//             "city": "El Moukhtar",
//             "countryCode": "MA"
//         },
//         "price": 1121,
//         "reviewScores": {
//             "Cleanliness": 5,
//             "Accuracy": 5,
//             "Communication": 5,
//             "Location": 5,
//             "Check-in": 5,
//             "Value": 4.8,
//             "Rating": 5
//         },
//         "reviews": [
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f4407e36c59e6164fc713",
//                     "fullname": "Charlene",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Accueil extra, service extra, communication parfaite! Rien à redire notre séjour était parfait!!!!"
//             },
//             {
//                 "at": "2021-10-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627z3407e36c59e6164fc170",
//                     "fullname": "Alicia",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "If you are looking to stay at a desert retreat, look no farther. The best thing is you get the full Sahara glamping experience but only a couple hours outside of Marrakesh and Casablanca.The accommodations are gorgeous.So are the pool, fire pit, and lounge areas.The restaurant and tents are surrounded by lush plants in the front, making this a true oasis.The food at the restaurant was as excellent as the service.The preserved lemon and chicken tangine was the best we had had in Morocco.They also set up ATV and camel riding excursions for us.Both of these were set up with such ease and were so much fun!Our one regret was that we did not stay here long enough during our trip to Morocco."
//             },
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627e3407e36c59e6164fc770",
//                     "fullname": "Issam",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Excellent sejour, rien à dire ce fût vraiment un bonheur.L'équipe est top, au petit soin et très discrète.A faire sans aucune hésitations."
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627o3407e36c59e6164fc770",
//                     "fullname": "Melanie",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "C’est un endroit magnifique! Parfait pour se détendre autour de la piscine Nous avons eu un accueil parfait!La lodge est très propre, spacieuse et super jolie Je recommande Oxygen Lodge"
//             }
//         ],
//         "_id": "622f337a95c7d36e298aa8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653593594/desert/02dac999-dcbb-450f-9cef-1751e44254d3_wo8lvf.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653593593/desert/aa10f9c5-483e-4870-8a8a-58b276188690_giccok.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653593592/desert/4eecb08d-3ce4-4964-9525-a7fa384b952c_bdqpma.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653593592/desert/0614e122-9634-4e59-852c-d95b5213f6ba_hdguz9.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653593592/desert/aa213bd2-5216-4f72-b76e-bb81e45d8ba7_aimykc.webp"
//         ]
//     },
//     {
//         "name": "Samujana Twenty-Four",
//         "category": "Luxe",
//         "summary": "The ideal spot for entertaining large groups, twenty-four is the biggest and most amenity filled villa in the Samujana development. Indoor and outdoor areas are spacious enough for a large amount of guests, merging seamlessly in an open concept design. Perfect for the sunrise and sunset, views from the terrace look out to the south and west over the Gulf of Thailand and all eight of the bedrooms have an amazing ocean view.",
//         "roomType": "Private room",
//         "guests": 16,
//         "bedrooms": 8,
//         "beds": 8,
//         "bath": 10,
//         "amenities": [
//             "Bathub",
//             "Shampoo",
//             "Clothing storage",
//             "Bed lines",
//             "Kitchen",
//             "Private pool",
//             "Gym",
//             "Free Parking on premises",
//             "Wine glasses",
//             "Sound system",
//             "Air conditioning",
//             "Body soap",
//             "Hot Water",
//             "Shower gel",
//             "TV",
//             "Wifi",
//             "Heating",
//             "Free street parking"
//         ],
//         "host": {
//             "_id": "622f3403e3hc58e6164faf93",
//             "fullname": "Nikki Maku",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": true
//         },
//         "address": {
//             "country": "Thailand",
//             "location": {
//                 "lat": 9.512017,
//                 "lng": 100.013596
//             },
//             "city": "Koh Samui",
//             "countryCode": "TH"
//         },
//         "price": 2412,
//         "reviewScores": {
//             "Cleanliness": 5,
//             "Accuracy": 5,
//             "Communication": 5,
//             "Location": 5,
//             "Check-in": 5,
//             "Value": 4.8,
//             "Rating": 5
//         },
//         "reviews": [
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3427e36c59e6164fc713",
//                     "fullname": "Isabella",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Great place!!!"
//             },
//             {
//                 "at": "2021-10-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3497e36c59e6164fc170",
//                     "fullname": "Chichu",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Amp, our villa manager, was extremely helpful in arranging all the logistics for us and our housekeeping staff were the nicest, most skillful, and attentive people! We were all very impressed with them."
//             }
//         ],
//         "_id": "622f337a95c7d36e29xaa8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653594454/lux/6934f1e4-e383-4bb7-97ef-709f47615fa0_zuexy3.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653594454/lux/6934f1e4-e383-4bb7-97ef-709f47615fa0_zuexy3.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653594453/lux/306f87d2-52ab-4df4-a5db-52cb6a471839_pzt1uh.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653594452/lux/83eda27f-50be-4356-8d74-0c40ef73226a_ibv2xm.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653594452/lux/7a1edc4f-3b35-4db9-ad8f-6504ff205b53_foszxn.webp"
//         ]
//     },
//     {
//         "name": "Mirror House South",
//         "category": "Luxe",
//         "summary": "The Mirror Houses are a pair of vacation homes, set in the marvellous surroundings of the South Tyrolean Dolomites, amidst a beautiful scenery of apple trees, just outside the city of Bolzano. The Mirror houses offer a unique chance to spend a beautiful vacation surrounded by contemporary architecture of the highest standards and the most astonishing Landscape and beauty nature has to offer.",
//         "roomType": "Entire place",
//         "guests": 4,
//         "bedrooms": 1,
//         "beds": 2,
//         "bath": 2,
//         "amenities": [
//             "Hair dryer",
//             "Hot water",
//             "Essentials",
//             "Shampoo",
//             "Hangers",
//             "Free parking on premises",
//             "TV",
//             "Private pool",
//             "Air conditioning",
//             "Kitchen",
//             "Safe",
//             "Heating",
//             "Washer"
//         ],
//         "host": {
//             "_id": "622f3403e36c52d6164faf93",
//             "fullname": "Sabina Angela",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Italy",
//             "location": {
//                 "lat": 46.5,
//                 "lng": 11.35
//             },
//             "city": "Bozlano",
//             "countryCode": "IT"
//         },
//         "price": 465,
//         "reviewScores": {
//             "Cleanliness": 5,
//             "Accuracy": 4.9,
//             "Communication": 4.9,
//             "Location": 4.7,
//             "Check-in": 5,
//             "Value": 4.8,
//             "Rating": 4.9
//         },
//         "reviews": [
//             {
//                 "at": "2022-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3405d36c59e6164fc713",
//                     "fullname": "Yasmina",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Beautiful house in Bolzano surrounded by mountains and apple trees. We loved our stay and would definitely come back"
//             },
//             {
//                 "at": "2021-12-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f340z436c59e6614fc170",
//                     "fullname": "Ahmed",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Great unique place to stay in quiet area with incredible design. Comfortable and great host that explained everything and helpful with great communication. Recommend everyone coming to Bolzano choose this place."
//             },
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36w99e6164fc170",
//                     "fullname": "Kyle",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "The mirror houses are a great and unique place to stay. You can’t go wrong staying here if you’re looking to explore the Dolomites, taste the amazing local cuisine or go shopping in Bolzano."
//             },
//             {
//                 "at": "2021-04-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36o29e6164fc770",
//                     "fullname": "Thomas",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Beautiful mirror house. Hard to find definitely use (Hidden by Airbnb) maps! Places not open to late in area. Great communication and help finding it from host. Small but very peaceful and nice waking up to Mountain View’s. Would stay again!"
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36b59e6164fc770",
//                     "fullname": "Mariya",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Amazing host with wonderful house. Loved our stay to the moon and back!"
//             }
//         ],
//         "_id": "622f337a95c7d36p298aa8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653723585/lux/1/e0b2123a_original_leqvw4.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653723583/lux/1/46d207f2_original_iqtfis.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653723585/lux/1/309bee53-311d-4f07-a2e7-14daadbbfb77_m3joor.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653723585/lux/1/9815f41f_original_ytslyp.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653723584/lux/1/7186bb11_original_wf6yto.webp"
//         ]
//     },
//     {
//         "name": "Villa Blue Sea",
//         "category": "National Parks",
//         "summary": "Perched above the glorious southern coastline just outside of Skala village, the fabulous sea views from Blue Sea are appreciated from every level of this modern, charming house.This wonderful location is right on the seafront however, and the swimming pool and terrace at the front of the villa create a sublime skyline of pool and sea.The smart, informal décor of the interiors is welcoming and relaxed, just as a beachfront house should be, with browns and lilacs offering a pretty backdrop to the dramatic sea panoramas around the pool.The open plan living dining and kitchen area have patio doors that open out onto the terrace with a pergola offering shade over the outdoor dining area, perfect for leisurely lunches outdoors.The twin bedroom also opens onto the terrace and upstairs the lovely master bedroom has another seating area and a splendid glass panelled balcony that does justice to the vistas.",
//         "roomType": "Entire place",
//         "guests": 4,
//         "bedrooms": 2,
//         "beds": 3,
//         "bath": 2,
//         "amenities": [
//             "Wifi",
//             "Kitchen",
//             "Pool",
//             "Free parking on premises",
//             "Washer",
//             "Hair dryer",
//             "TV",
//             "Heating",
//             "Hangers",
//             "Air conditioning"
//         ],
//         "host": {
//             "_id": "622f3403e36c58e6264faf93",
//             "fullname": "Constantinos",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Greece",
//             "location": {
//                 "lat": 36.85,
//                 "lng": 22.66667
//             },
//             "city": "Skala",
//             "countryCode": "GR"
//         },
//         "price": 389,
//         "reviewScores": {
//             "Cleanliness": 4.8,
//             "Accuracy": 4.8,
//             "Communication": 4.9,
//             "Location": 4.7,
//             "Check-in": 4.9,
//             "Value": 4.9,
//             "Rating": 4.8
//         },
//         "reviews": [
//             {
//                 "at": "2022-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59e9164fd713",
//                     "fullname": "Chandler",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Constantinos has been a great host, greeted us with a warm welcome ! Even checked us into his family hotel after check out which was lovely and spacious.The villa was amazing, good location, clean and the comfiest bed we have ever slept in on holiday .The villa was also very private with great views and lovely pool.We will definitely stay again!! Thank you Constantinos :),Amber & Chandler"
//             },
//             {
//                 "at": "2021-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59m6614fc170",
//                     "fullname": "Melissa",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Constantinos has been such a great host! The place is incredible, walking distance to town, so many restaurants and beaches to go to. We had an amazing time exploring, hiking, renting boats, taking tours- it was truly incredible!"
//             },
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59k6164fc170",
//                     "fullname": "Lucas",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Great villa in quiet location just a short walk from town centre. Couple of bars and restaurants immediately out of Villa driveway too. Little beach outside too is great for a quiet morning swim. Villa itself is prestige, air con v. effective and comes with all expected amenities. We will be back!"
//             },
//             {
//                 "at": "2021-07-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c29e6164fc770",
//                     "fullname": "Tristan",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Villa Blue Sea is a really nicely done place. There are 3 houses on the plot , all of which are very private, we stayed in the middle one as a family of 3. We felt like we could really relax there, the outdoor areas were really nice (outdoor shower very practical for rinsing off after the beach) the pool was kept super clean. The bedrooms were very comfortable and spacious.Its a short walk to Skala Beach and town, or drive just a few min.Skala has a nice laidback beachy vibe to it.There's even a little pebble beach directly opposite for a quick dip.Costas was really nice and made everything simple and efficient, dropped in to say hello when we arrived and gave us information about the area, was quick to respond to messages and available if we needed anything.We would definitely stay again in the future.Absolute recommendation !Thanks again Costas!"
//             },
//             {
//                 "at": "2020-10-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36y29e6164fc770",
//                     "fullname": "Becky",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "We had a wonderful stay at Villa Blue Sea, the villa was lovely and Costas was an excellent host. The location was perfect with the bars and restaurants of Skala just a short walk away. The villa has excellent sea views which are perfect for watching the sun rise. We will definitely visit again!"
//             },
//             {
//                 "at": "2020-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59i3164fc770",
//                     "fullname": "Rae",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "We had the most fabulous holiday. The villa is comfortable, chic, super clean and close to skala. Costas is a wonderful host. Will be back for the 180 degree ocean sunrises for sure."
//             },
//             {
//                 "at": "2020-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c53i6164fc770",
//                     "fullname": "Victoria",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "La Villa es muy bonita, cuenta con todas las instalaciones para hacer una estancia muy agradable.Supermercados y restaurantes cerca.Excelente atención del anfitrión tanto antes de la llegada como durante la estancia."
//             }
//         ],
//         "_id": "622f337a95c7d36e298ma8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653751571/national%20parks/a8f0f5c8-54eb-4fc2-bbb8-e465e74564ee_cquymo.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653751572/national%20parks/23cf8cb5-1937-4e5f-8000-7bf75ffa8f3a_dfpmwt.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653751572/national%20parks/c051c636-3a9d-4cf5-84de-c7226fc6bfd6_abjtqs.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653751570/national%20parks/57b06c3a-6c27-4852-bb12-8466ba50ca05_k2ox93.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653751569/national%20parks/6f7c91c1-08bc-44e6-8240-5e67f9ac71e7_ilytct.webp"
//         ]
//     },
//     {
//         "name": "Luxury My Villa Corfu by GHH",
//         "category": "Luxe",
//         "summary": "Villa Marion has the rare combination of being in a rural, secluded and private location.Sleeps 16 guests.8 double or twin bedrooms (four have doors or big windows onto pool area)2 Sitting rooms with open plan kitchens (2) and breakfast area 2 living rooms with doors onto terrace Playroom with doors onto terrace 6 bathrooms 2 Swimming pools 4 x 8m each, 2 pool showers Wooden decking Outside dining, BBQ Air Conditioning.",
//         "roomType": "Entire place",
//         "guests": 16,
//         "bedrooms": 8,
//         "beds": 8,
//         "bath": 6,
//         "amenities": [
//             "Wifi",
//             "Kitchen",
//             "Pool",
//             "Free parking on premises",
//             "Washer",
//             "Hair dryer",
//             "TV",
//             "Heating",
//             "Hangers",
//             "Air conditioning",
//             "Smoke alarm",
//             "Self check-in"
//         ],
//         "host": {
//             "_id": "622f3403e36x58e6264aaf93",
//             "fullname": "Golden Home Holidays",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Greece",
//             "location": {
//                 "lat": 36.85,
//                 "lng": 22.66667
//             },
//             "city": "Nisaki",
//             "countryCode": "GR"
//         },
//         "price": 2144,
//         "reviewScores": {
//             "Cleanliness": 4.7,
//             "Accuracy": 4.5,
//             "Communication": 4.5,
//             "Location": 4.7,
//             "Check-in": 4.5,
//             "Value": 4.3,
//             "Rating": 4.5
//         },
//         "reviews": [
//             {
//                 "at": "2022-04-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407y36c29e6164fd713",
//                     "fullname": "Penni",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Beautiful home. I booked it with 10 of my friends for my birthday. Has great Features, like under floor heating. It has incredible views.We had issues with finding the villa.Using the location on Airbnb.We actually got lost.You can put the name of the villa into good maps and it will take you directly to the place.Also had a few small touches missing, but this did not Reduce from the experience."
//             },
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407y36c59e5614fc170",
//                     "fullname": "Tito",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Pictures are simply not enough. Incredible villa, stunning view, and amazing place overall. 10/10."
//             },
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36t59e6162fc170",
//                     "fullname": "Harry",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "The pictures do not do it justice! This place is paradise, me and my friends stayed here for a weekend and was blown away. Mira was always there for us whenever we needed something and the locals were all so welcoming. If you’re looking for the perfect getaway, this is your place."
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59e6164fx770",
//                     "fullname": "Charlotte",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "What a fabulous holiday we had at My Villa Corfu!! The booking process was very straightforward and we were helped with booking cars and getting food in the villa prior to our arrival. On arrival we were greeted by our lovely host with fresh fruit and wine. She also helped us with restaurant bookings and even drove us to a few of them so we didn't get lost. Views from the villa were outstanding, I don't think they could have been any better. So lovely to watch the boats go by on an evening. Very spacious inside, if anything a lot of wasted space on the middle floor which we barely used. It was really very clean and simple inside which was great for us and the kids. It is actually 2 villas which have been incorporated outside and along the balconies into one villa but they are still separated inside, we didn't know this before we went but it actually worked well for us as we were 2 families. The only downside was they were 2 very small kitchens in each. Easy to get food shopping delivered to the supermarket by Aphrodite but I do believe you pay a premium for this so keep an eye out. She also has a gorgeous bakery next door to her shop."
//             },
//             {
//                 "at": "2020-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59e6164bc770",
//                     "fullname": "Thi Minh Thuy",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "The view is stunning. We received a great welcoming, with fruits and glasses of wine. The road up the villa is a bit difficult, although the villa itself is spectacular."
//             },
//             {
//                 "at": "2020-07-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59e6164uc770",
//                     "fullname": "Ofer",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "A beautiful and well maintained home in a location with amazing views.A problematic approach to minibuses and impossible for buses."
//             }
//         ],
//         "_id": "622f337a95c7d36e298ai8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/a5cd56cb-1ddd-437b-bfbe-30422605f909_gxrq3a.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/29549a65-b06e-4a41-b58e-3bd54efc5295_df2orx.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/01f96423-76df-4bdd-a427-263e27250109_cmne74.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/177fbdf2-cd72-40bf-9444-e56869b384cd_tse805.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653816572/lux/2/df8ac158-7a43-4b5f-b226-8c5851eb6c93_bqicng.webp"
//         ]
//     },
//     {
//         "name": "Villa Arete - Luxury Villa by the Sea with swimming pool on Corfu Island",
//         "category": "National Parks",
//         "summary": "Villa Arete is a brand new property for the 2020 season, occupying a privileged location in the area of Perithia, on the sought after North-East coast of Corfu. Part of the exclusive “Perithia View” estate, this villa has been finished to the highest standard to offer a superior holiday experience to the most demanding guests. With 4 bedrooms, 4 bathrooms, extensive lounges and patios as well as private pool, tis villa ticks all the boxes. The elevated position (yet very close to amazing beaches) with 180 degrees panoramic views, offers the most amazing gift of the nature: the chance to admire, from the same property, both sunrise and sunset. In Villa Arete, every moment will be an experience to live and remember!",
//         "roomType": "Shared room",
//         "guests": 9,
//         "bedrooms": 4,
//         "beds": 7,
//         "bath": 4,
//         "amenities": [
//             "Wifi",
//             "Kitchen",
//             "Pool",
//             "Dryer",
//             "Hot water",
//             "Free parking on premises",
//             "Washer",
//             "Hair dryer",
//             "TV",
//             "Long term stays allowed",
//             "Heating",
//             "Hangers",
//             "Air conditioning"
//         ],
//         "host": {
//             "_id": "622f3403e36c58e6164kaf91",
//             "fullname": "Posarelli Villas",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Greece",
//             "location": {
//                 "lat": 36.85,
//                 "lng": 22.66667
//             },
//             "city": "Pelekito",
//             "countryCode": "GR"
//         },
//         "price": 527,
//         "reviewScores": {
//             "Cleanliness": 4.7,
//             "Accuracy": 4.5,
//             "Communication": 4.5,
//             "Location": 4.7,
//             "Check-in": 4.5,
//             "Value": 4.3,
//             "Rating": 4.5
//         },
//         "reviews": [
//             {
//                 "at": "2022-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59w6164fd713",
//                     "fullname": "Amie",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "our stay was amazing, the villa is beautiful , clean and just perfect.the area is a bit out of the way and have to get taxis everywhere due to being no roads to walk down, however 100% worth it Had a little problem finding the villa, as adress given didn’t come up on maps, but found from(Hidden by Airbnb) and wasn’t too bad once you knew where it was 10/10 would recommend for groups"
//             },
//             {
//                 "at": "2021-04-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3402v36c59e6614fc170",
//                     "fullname": "Kim",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "perfect spot, exactly as detailed one slight challenge was the internet.very intermittant, however this is nothing to do with the villa just greece I think would definately recommend for a perfect holiday"
//             },
//             {
//                 "at": "2021-10-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36v59e6164fc170",
//                     "fullname": "Harry",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "The villa is very neat, full of amenities. Great view and a large terrace. Each room has a bathroom. There are parking spaces on site. There's a small town near where there are supermarkets and restaurants. A great time with friends, I definitely recommend choosing this villa."
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407d36c59v6164fc770",
//                     "fullname": "Miriam",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "We stayed in Arete Villa which was in the middle apartment of the 3. The views are absolutely stunning, pool was clean and external areas were 5*s. Overall the apartment was exceptionally clean, with perfect ‘chill’ areas to relax in. Kitchen was fully equipped and the beds were super comfy. Super close to restaurants and beaches, closest town was a 7 minute drive which was really lively. Will definitely stay again!"
//             },
//             {
//                 "at": "2020-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59w2164fc770",
//                     "fullname": "Calliope",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Lovely villas with an amazing view and great pool. We really enjoyed our stay. A group of 8 friends and it was really comfortable particularly the outdoor space. Would definitely stay again!"
//             },
//             {
//                 "at": "2020-04-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59e1154fc770",
//                     "fullname": "Krn",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Superbe villa, vue magnifique, design et écologique, propre, le personnel est très serviable et avenant. Très grand merci à eux."
//             }
//         ],
//         "_id": "622f337a95c7d36e298ah8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653752657/national%20parks/2/cf1e587e-dee6-4d56-9564-add54fdf4e4a_bcd6po.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653752659/national%20parks/2/9f65aa94-5e1e-4fd2-a42e-37a5198d0f4c_qlr170.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653752658/national%20parks/2/fd71c787-6641-4026-8d71-19e197fec9d4_xy27c5.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653752658/national%20parks/2/fb8bcf3c-0e61-4478-a985-c8793adec149_u5mgcx.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653752657/national%20parks/2/8eafa096-aa8b-4ef4-921c-16f61f27b1c0_jnosdh.webp"
//         ]
//     },
//     {
//         "name": "Still Bend/Frank Lloyd Wright's Schwartz House",
//         "category": "Design",
//         "summary": "Featured on Netflix's THE WORLDS MOST AMAZING VACATION RENTALS Season 2, ep. 1. Still Bend/Bernard Schwartz House is Frank Lloyd Wright's built version of his Life Magazine Dream House design from 1938. The house is located on the East Twin River about a mile from Lake Michigan.",
//         "roomType": "Private room",
//         "guests": 6,
//         "bedrooms": 4,
//         "beds": 4,
//         "bath": 3,
//         "amenities": [
//             "Wifi",
//             "Kitchen",
//             "Pool",
//             "Dryer",
//             "Hot water",
//             "Free parking on premises",
//             "Washer",
//             "Hair dryer",
//             "TV",
//             "Bed linens",
//             "Heating",
//             "Hangers",
//             "Shampoo",
//             "Air conditioning"
//         ],
//         "host": {
//             "_id": "622f3403e36c58x6064aaf91",
//             "fullname": "Michael",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "United States",
//             "location": {
//                 "lat": 44.15388,
//                 "lng": -87.56925
//             },
//             "city": "Two Rivers",
//             "countryCode": "US"
//         },
//         "price": 527,
//         "reviewScores": {
//             "Cleanliness": 4.7,
//             "Accuracy": 4.9,
//             "Communication": 4.9,
//             "Location": 4.7,
//             "Check-in": 4.5,
//             "Value": 4.4,
//             "Rating": 4.7
//         },
//         "reviews": [
//             {
//                 "at": "2022-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c57x6164fd713",
//                     "fullname": "Tonya",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "If there were more stars to give I’d give them. Unbelievably wonderful experience!!"
//             },
//             {
//                 "at": "2021-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627x3400e36c59e6614fc170",
//                     "fullname": "Gilbert",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Unique experience staying at a Frank Lloyd Wright home! Still Bend is a must-visit and must stay for all the art, design, and architecture junkies like us. The place looks good in photos, and wait till you see the actual house. It has everything you need, and Michael was such a fantastic host. There is so much places to visit which is 60-90 minutes away Two Rivers i.e. Door County, Kohler and Milwaukee! We will definitely try and visit again!"
//             },
//             {
//                 "at": "2021-10-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59e6164fc170",
//                     "fullname": "Carrie",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "If you have an opportunity to book this home - do it! It is truly a rare gem that we feel so lucky to have gotten to stay in. Thank you! Staying here is like a warm hug for your soul. You cannot help but to slow down, breath, and marvel over the details and craftsmanship. It is clear from the moment you walk in that this home is lovingly cared for and that the owners take immense pride in making the space a wonderful experience for everyone who enters. Really just an incredible place to stay!"
//             },
//             {
//                 "at": "2021-04-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407d36c59e6164fw720",
//                     "fullname": "Carolynn",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "The opportunity to stay in such a beautiful piece of history is rare. Thank you so much for sharing such an amazing property with myself and my family. The house was extremely clean and well equipped with what we needed. It was so fun to go around and look at the all the period pieces. Highly recommend you take the opportunity while you can."
//             },
//             {
//                 "at": "2020-04-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "625f2407e36c59e6164fc770",
//                     "fullname": "Alice",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "We had a wonderful and relaxing stay at Still Bend. The house is incredible! We feel so fortunate to have stayed in a Frank Lloyd Wright masterpiece. The owners have done a fantastic job making their guests feel welcome. We didn't want to leave and hope to stay again in the near future."
//             },
//             {
//                 "at": "2020-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621f3207e36c59e6164fc770",
//                     "fullname": "Michelle",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "We absolutely loved the entire experience we had at this beautiful home! Perfect for girls getaway!"
//             }
//         ],
//         "_id": "622f337a95c7d36e298ax0l8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653811319/Design/1/f1e4ab81-1dc2-402d-949f-0a8b9dfce968_q455di.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653811319/Design/1/fc12b9de-be10-4166-9666-159e78888c31_dgxq9y.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653811319/Design/1/eba677ba-646a-4708-87a8-0f04fa2beeae_fsov6c.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653811318/Design/1/c41a876f-83bf-419d-833f-83b973ee48b2_tjsf8y.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653811318/Design/1/987e689c-ab00-40be-90e4-7ced014cac2d_zsm1cp.webp"
//         ]
//     },
//     {
//         "name": "Villa Orion Magnificent SeaView",
//         "category": "Design",
//         "summary": "Villa 'Orion' is in Cavo Delos-Kanalia, just 10 minutes from the airport of Mykonos.The villa is situated on a 1000 m2 property with breath - taking view, it's coprised of a 100m2. house along with a 70 m2 fully equiped guest house. Also there is a new guest house of 50m2 fully equiped.",
//         "roomType": "Entire place",
//         "guests": 12,
//         "bedrooms": 5,
//         "beds": 8,
//         "bath": 5,
//         "amenities": [
//             "Wifi",
//             "Kitchen",
//             "Private Pool",
//             "Dryer",
//             "Hot water",
//             "Free parking on premises",
//             "Washer",
//             "Hair dryer",
//             "TV",
//             "Bed linens",
//             "Heating",
//             "Pets allowed",
//             "Security cameras on property",
//             "Air conditioning"
//         ],
//         "host": {
//             "_id": "622f3403e36c58x6064saf81",
//             "fullname": "Nikolas",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Greece",
//             "location": {
//                 "lat": 37.4467,
//                 "lng": 25.3289
//             },
//             "city": "Mykonos",
//             "countryCode": "GR"
//         },
//         "price": 527,
//         "reviewScores": {
//             "Cleanliness": 4.7,
//             "Accuracy": 4.7,
//             "Communication": 4.5,
//             "Location": 4.7,
//             "Check-in": 4.7,
//             "Value": 4.6,
//             "Rating": 4.6
//         },
//         "reviews": [
//             {
//                 "at": "2022-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3277x36c57x6164fd713",
//                     "fullname": "Matthew",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Bless the Villa Orion! Amazing beautiful property, helpful and resourceful owners, all part of a perfect week in Mykonos. We would definitely stay here again and can’t imagine a better place."
//             },
//             {
//                 "at": "2021-04-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627x3400e3x259e6614fc170",
//                     "fullname": "Mike And Amber",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "This house was everything we wanted and more. The views, the outdoor space and the location were perfect. We were two families with 8 people in total and just the right amount of space. We hired Irine one day to cook lunch and dinner for us. Her and her husband provided amazing meals! The communication between the house manager was quick every time and got us everything and anything we could have wanted. We highly recommend this house."
//             },
//             {
//                 "at": "2021-10-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f340x036c59e6164fc170",
//                     "fullname": "Kunal",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "The home was clean and the host was very responsive. The house is a bit out of the main towns so be sure to arrange car transfers to and form the villa. The view is amazing form the house and the pool deck area. The listing shows 2 guest houses but there was only 1 when we arrived."
//             },
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407d36m59e6164fw720",
//                     "fullname": "Iain",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "A beautiful place!! Highly recommended"
//             },
//             {
//                 "at": "2020-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "625f2407e36c59e6162lc770",
//                     "fullname": "Shelby",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "This house has fantastic outside space for a group. They were so easy to Communicate with and helped us plan all transport, groceries etc.great stay."
//             },
//             {
//                 "at": "2020-10-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621f3207e36c59e6114xc770",
//                     "fullname": "Nandita",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "I can’t say enough good things about this villa. Beautiful set up, views, and very clean. The hosts were execrations and quick to answer and help us with all that we needed. Definitely get a car or ATV to get around but they can also help hook you up with a driver. Everything was perfect."
//             },
//             {
//                 "at": "2020-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621f3702e36c59e6114xc770",
//                     "fullname": "Michael",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "What an amazing experiance.. so greatful to have stayed at Anna and Nikolas’s beautiful villa.. amazing location so picturesque and had everything we needed. The owners and staff were very attentive and helped out with arranging wverything we needed fromredtaurant recommendations to transportation and beautiful chef dinner for a sunset bday. I will definitely love to visit again!!!"
//             },
//             {
//                 "at": "2020-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621f3702e36c59e6104xc770",
//                     "fullname": "Pamela",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "We had the best time at Villa Orion! The views were spectacular! The host goes beyond expectations to make you feel comfortable and help you with anything you need!"
//             }
//         ],
//         "_id": "622f337a95c7d36i298ka8f8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653814479/Design/2/bfd756d8-4bb6-40eb-b22c-5ca20056ad00_gd1j6d.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653814479/Design/2/4bd6b4fc-012d-4481-bd5c-42eaf4292d86_clg2h9.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653814479/Design/2/a6edb65a-6cfc-453a-a1f4-3e5b16a87e46_hq0wah.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653814479/Design/2/883fcbc1-89d8-4864-8d65-d1fbf00215ed_f3zgb8.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653814478/Design/2/825ff49c-adb6-41c9-9083-ecb6d074f102_ue5puk.webp"
//         ]
//     },
//     {
//         "name": "9 Islands Suites-Vasilika Suite with Jacuzzi",
//         "category": "Amazing Pool",
//         "summary": "9 Islands Suites offers Suites of high aesthetic quality. Each Suite offers absolute privacy, a private terrace with sea and sunset view, air conditioning, coffee facilities, a satellite tv, a flat screen TV and a safe box.9 Islands also provides a stunning swimming pool, towels, free wi- fi and a free private parking area.The suites are located only 3 km away from Mykonos’ main town, 6 km away from the airport, 4 km away from the old port and are in the vicinity of many popular beaches.",
//         "roomType": "Private room",
//         "guests": 4,
//         "bedrooms": 2,
//         "beds": 2,
//         "bath": 2,
//         "amenities": [
//             "Sea View",
//             "Free parking on premises",
//             "Wifi",
//             "Private Pool",
//             "Pets allowed",
//             "Air conditioning",
//             "Hot tub",
//             "Washer",
//             "Hair dryer",
//             "Hangers",
//             "Bed linens",
//             "Shower gel",
//             "Private entrance",
//             "Security cameras on property"
//         ],
//         "host": {
//             "_id": "622f3403e36c58x6014saf18",
//             "fullname": "Panos",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Greece",
//             "location": {
//                 "lat": 37.4467,
//                 "lng": 25.3289
//             },
//             "city": "Mykonos",
//             "countryCode": "GR"
//         },
//         "price": 424,
//         "reviewScores": {
//             "Cleanliness": 4.9,
//             "Accuracy": 4.7,
//             "Communication": 4.5,
//             "Location": 4.7,
//             "Check-in": 4.8,
//             "Value": 4.5,
//             "Rating": 4.7
//         },
//         "reviews": [
//             {
//                 "at": "2022-07-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627x3117x36c57x6164fd713",
//                     "fullname": "Isabella",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Our stay was wonderful! 9 islands is a beautiful boutique hotel and Panos was very attentive to us throughout our stay! We will definitely come back! We rented a car and all the main points of mykonos are a 10 minute drive from the hotel. The rooms are great and the view is wonderful."
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627x3400x3x259e6614fc170",
//                     "fullname": "Luca",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Good"
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "527f340x036c59e6164fc170",
//                     "fullname": "Kristian",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "5 stars overall. Lovely place, and a great location. Panos was an excellent host very attentive to all of our questions and concerns. Quick replies and the cleaning lady was amazing! The hot tub was not completely private, it was more personal as we could see the other hot tub and room clearly across from us. Would highly recommend getting a 4WHEELER or any vehicle because taxis are expensive and it is about 10-15 minutes away from most attractions on the island."
//             },
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "671f3407d26m59e6164fw720",
//                     "fullname": "Jorge",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Spiros and his staff are amazing. You will not regret anything about this place only if you don’t stay long enough, a definitive recommendation and must come back."
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "625f2407e36c59e6162lc770",
//                     "fullname": "Shani",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Perfect place. the view, the service, the design, the hospitality, the hosts are all amazing!!Definitely worth a stay!"
//             }
//         ],
//         "_id": "622f337a95c7d36i298ke8x9",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653815812/amazing%20pools/1/fc2276da-c56e-460b-861b-d3e0d9e0e95d_e0l4bs.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653815812/amazing%20pools/1/01239335-24ec-4858-9d61-881f6e21632f_lj92xc.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653815812/amazing%20pools/1/aa3161ee-a1aa-4e8b-977b-119da52ebb0f_gfg0ht.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653815811/amazing%20pools/1/6eb185e9-64c8-4cf5-891b-d95d2ffc56b9_ewc7re.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653815811/amazing%20pools/1/1e333818-2696-49b9-a705-b5abe5f8874e_awssmm.webp"
//         ]
//     },
//     {
//         "name": "Villa Sawarin",
//         "category": "Design",
//         "summary": "Artfully designed by accomplished architects Jean-Michel Gathy and Phillipe Starck, Villa Sawarin is a perfect symbiosis of a contemporary and Thai style villa set in the exclusive private development of Phuket’s Cape Yamu. The most discerning world travelers will be impressed by its easy opulence and thoughtful attention to detail. Perfect for presidents – of nations and corporations – while still being family-friendly, the cathedral-like proportions of this beachfront mansion can easily host up to 18 guests.",
//         "roomType": "Entire place",
//         "guests": 16,
//         "bedrooms": 9,
//         "beds": 10,
//         "bath": 10,
//         "amenities": [
//             "Kitchen",
//             "Private pool",
//             "Safe",
//             "Wifi",
//             "Dryer",
//             "Hot water",
//             "Free parking on premises",
//             "Washer",
//             "Hair dryer",
//             "TV",
//             "Bed linens",
//             "Heating",
//             "Hangers",
//             "Shampoo",
//             "Air conditioning"
//         ],
//         "host": {
//             "_id": "622f3403e36c58x6064aaf91",
//             "fullname": "Fran",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Thailand",
//             "location": {
//                 "lat": 13.736717,
//                 "lng": 100.523186
//             },
//             "city": "Phuket",
//             "countryCode": "TH"
//         },
//         "price": 2984,
//         "reviewScores": {
//             "Cleanliness": 4.9,
//             "Accuracy": 4.8,
//             "Communication": 4.9,
//             "Location": 4.9,
//             "Check-in": 4.8,
//             "Value": 4.9,
//             "Rating": 4.9
//         },
//         "reviews": [
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3402x36l57x6164fd713",
//                     "fullname": "Fei",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Everything is perfect."
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627x3401e36s59e6614fc170",
//                     "fullname": "Adam",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Thank you Fran! It was terrific!"
//             },
//             {
//                 "at": "2021-10-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407e36c59e6464mc170",
//                     "fullname": "Olayinka",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "If I could give a rating of six stars, I would. This was hands down the best Airbnb experience I have ever had. Fran is an outstanding host and the warmth she emanates through her communications is evident in the interior styling of her home. Set amidst a picturesque landscape that you can view from every room, the house is spacious and enveloped in timber with plush carpeting, luscious bedding, and an incredibly well-stocked kitchen, designed to entertain. The Wensley is synonymous with retreat – a place to unwind, laugh, eat, reflect, and enjoy the natural landscape. We hope to retreat at the Wensley again soon."
//             },
//             {
//                 "at": "2022-03-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407d36c59e6164fw720",
//                     "fullname": "Kristy",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Do not hesitate and book The Wensley now!! The home is absolute design porn and situated on a gorgeous property. Location was great as it was about 20 minutes to the ocean and 15 to town. Such an amazing, relaxing stay for our family!! Everyone we know locally was so envious that we were staying on the property."
//             },
//             {
//                 "at": "2022-04-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "125f2407e36c59e6164fc770",
//                     "fullname": "Kate",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "We went to The Wensley because we wished to live deliberately, to front only the essential facts of life, and see if we could not learn what it had to teach, and not, when we came to die, discover that we had not lived.Majestical!"
//             },
//             {
//                 "at": "2021-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621f3207e30c59e6164fc770",
//                     "fullname": "Michelle",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Absolutely exquisite! Such a special space"
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621f3207e31c59p6164fp770",
//                     "fullname": "Pat",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "The Wensley was the perfect place for a post lockdown catch up and more than made up for a few missed events. Fran is a great host who keeps things very relaxing. 😎"
//             },
//             {
//                 "at": "2021-11-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621f3207p31c59p6164fp770",
//                     "fullname": "Anna",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Fabulous experience.Surrounded by stunning views, super comfortable furnishings, beautifully styled, attention to detail for all your needs.Thankyou Fran for providing the whole package.Our own slice of paradise for the weekend ✨"
//             }
//         ],
//         "_id": "622f337a95c7d36e298aa0i8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653819309/Design/3/201a00f9-0c23-4e75-9115-4ce1ceed05f6_bkyefc.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653819309/Design/3/da0ac469-edcf-418c-925d-adeb7bf6aec5_zyimnl.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653819309/Design/3/caac7192-a5d4-4ceb-9885-e22484132bd5_kwgcps.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653819309/Design/3/a8e43457-f768-4d5e-a676-c86a058cb190_oafrfa.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653819308/Design/3/bfd60bab-077f-4c32-94d5-f99d57808ef5_hf1wio.webp"
//         ]
//     },
//     {
//         "name": "Award Winning Designer home in Paddington",
//         "category": "Design",
//         "summary": "The Glass House won this years prestigious House & Garden Magazines Top 50 Rooms in Australia award for best furnishings and sets a new standard for inner city escapes.Built this year and finished in the highest finishes and most luxurious materials as an interior showhome it provides unparalleled luxury with heated marble floors, open fire, internal water feature, indoor & outdoor living areas and designer furniture & lighting throughout.",
//         "roomType": "Entire place",
//         "guests": 6,
//         "bedrooms": 3,
//         "beds": 3,
//         "bath": 3,
//         "amenities": [
//             "Kitchen",
//             "Wifi",
//             "TV",
//             "Dryer",
//             "Safe",
//             "Air conditioning",
//             "Hot water",
//             "Free parking on premises",
//             "Security cameras on property",
//             "Hair dryer",
//             "Bed linens",
//             "Hangers",
//             "Heating"
//         ],
//         "host": {
//             "_id": "622f3403e36c58x6064faf99",
//             "fullname": "Nina",
//             "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_small",
//             "isSuperhost": false
//         },
//         "address": {
//             "country": "Australia",
//             "location": {
//                 "lat": -31.840233,
//                 "lng": 145.612793
//             },
//             "city": "Darlinghurst",
//             "countryCode": "AU"
//         },
//         "price": 982,
//         "reviewScores": {
//             "Cleanliness": 4.8,
//             "Accuracy": 4.9,
//             "Communication": 4.7,
//             "Location": 4.9,
//             "Check-in": 4.8,
//             "Value": 4.9,
//             "Rating": 4.8
//         },
//         "reviews": [
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3402x3l259x6164fd713",
//                     "fullname": "Loretta",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "It was a beautiful and modern home; great hostess."
//             },
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627x3411e36s59e6614fc170",
//                     "fullname": "Lara",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "A gorgeous home and great to set up as an office for a week. Super clean and well appointed. We will be back"
//             },
//             {
//                 "at": "2021-09-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3400p36c59e6464mc170",
//                     "fullname": "Paul",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Stylish house in a great location. Highly recommended."
//             },
//             {
//                 "at": "2021-12-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "627f3407d36c59e6164fw720",
//                     "fullname": "Anuraag",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Amazing host and perfect villa! Nina did everything to make sure we were comfortable throughout the stay."
//             },
//             {
//                 "at": "2022-03-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "125f2407p36p59e6164fc770",
//                     "fullname": "Charles",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "Outstanding. A truly amazing home. Stunningly designed. Superb hosts. A magical stay in Sydney."
//             },
//             {
//                 "at": "2021-05-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621k2037e30c59e6164fc770",
//                     "fullname": "James",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "We absolutely loved our stay at Nina’s property, it was just stunning, the most incredible house we have stayed in! The rooms are far more luxurious than any of the 5 star hotels in Sydney that we have stayed in before, and the design is incredible. The owners have furnished it with only the best of everything, from the beds to kitchen ware and linens. It was a very special treat for my wife and i to stay for the week and we were very sad to leave. The property is also very centrally located and we loved being able to walk to local shops and restaurants and being so close to the city, parks and beaches. We hope to come back! Thank you!"
//             },
//             {
//                 "at": "2021-08-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621f3227e31c59p6164fp770",
//                     "fullname": "Claire",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "A beautifully appointed apartment in a great central-east location. Staying in Nina's apartment was a much nicer experience than staying at any of the local luxury hotels. We're very much looking forward to staying here regularly."
//             },
//             {
//                 "at": "2021-11-12T04:00:00.000Z",
//                 "by": {
//                     "_id": "621f3317p31c59p6164fp770",
//                     "fullname": "Jess",
//                     "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
//                 },
//                 "txt": "This place is absolutely superb the pictures don’t do it justice at all!It is like a private 5 star hotel right in the heart of Paddington, with great cafes just up the road.The house is beautifully appointed with heated stone floors and internal water feature, voice controlled lighting and a stunning fireplace and outdoor courtyard.Nina was the perfect host and I would love to stay again."
//             }
//         ],
//         "_id": "622f337a95c7d31l298aa0i8",
//         "imgUrls": [
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/e361efa5-eeda-430d-a591-f69b1915eb89_kdpkrx.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/76478995-a450-441b-bdb7-2a5cafb50f4f_obczvk.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/40217c0d-7c1b-4668-865d-9b539d8dc26e_zhjzmv.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/79500c7f-4ffc-4474-8885-48126190360a_ssuh2k.webp",
//             "https://res.cloudinary.com/projectairbnb/image/upload/v1653820806/Design/4/17c07b42-b0df-46a8-b397-f0824f7add20_ebnbmh.webp"
//         ]
//     }
// ]




