<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Vaksdal barne- og ungdomskorps</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="/#/lan" target="_blank">
        <span class="mr-2">VBUK LAN</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container lighten-5 grid-list-md text-xs-center>
        <v-layout row>
          <v-flex xs16 sm6 md8>
            <Post title="Lyst til å spille i korps?">
              <p>               
                Vaksdal barne- og undomskorps holder til i Vaksdal kommune, Vestland fylke og har sin hovedbase i nye Dale skule. 
                Vi rekrutterer fra alle skolene i kommunen. Korpset har janitsjar besetning og dirigeres av trombonist og kulturskolelærer Ole Kristian Bonden.
                Det er bare til å slå på tråden til leder Terje Pedersen, tlf 913 34 697.

                <v-data-table
                  :headers="rehearsalh"
                  :items="rehearsals"
                  hide-default-footer
                ></v-data-table>
              </p>
            </Post>
            <Post title="Hva skjer?">
                <v-data-table
                  :headers="calendarh"
                  :items="calendar"
                  hide-default-footer
                >
                  <template v-slot:item.title="{ item }">
                    <a v-if="item.website" target="_blank" :href="item.website">
                      {{ item.title }}
                    </a>
                    <span v-if="!item.website">{{ item.title }}</span>
                  </template>
                </v-data-table>
            </Post>
          </v-flex>
          <v-flex xs10 sm6 md3>
            <img src="note-logo.jpg" width="97%"/>
            <Contact/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Post from "./components/Post";
import Contact from "./components/Contact";

export default {
  name: "VBUK",
  components: {
    Post, Contact
  },
  data: () => ({
    rehearsalh: [
      {
        text: 'Korps',
        value: 'title',
        align: 'left',
        sortable: false
      },
      {
        text: 'Dag',
        value: 'day'
      },
      {
        text: 'Tid',
        value: 'time'
      },
      {
        text: 'Sted',
        value: 'location'
      }
    ],
    rehearsals: [
      {
        title: "Aspirantkorps",
        location: "Dale skule",
        day: "Onsdager (fom 30.9 2020)",
        time: "16:15-17:15"
      },
      {
        title: "Hovedkorps",
        location: "Dale skule",
        day: "Onsdager",
        time: "17:30-19:30"
      }
    ],
    calendarh: [
      {
        text: 'Tittel',
        value: 'title',
        align: 'left',
        sortable: false
      },
      {
        text: 'Dag',
        value: 'day'
      },
      {
        text: 'Tid',
        value: 'time'
      },
      {
        text: 'Sted',
        value: 'location'
      }
    ],
    calendar: [
      {
        title: "Foreldremøte nye aspiranter",
        location: "Dale skule",
        day: "Onsdag 23.9 2020",
        time: "17:00-17:30"
      },
      {
        title: "Oppstart aspirantkorps Dale",
        location: "Dale skule",
        day: "Onsdag 30.9 2020",
        time: "16:15-17:15"
      },
      {
        title: "Høstkonsert",
        location: "Dale skule",
        day: "Lørdag 14.11 2020",
        time: "16:00-17:30"
      },
      {
        title: "VBUK LAN",
        location: "Turbinen",
        day: "Lørdag 17.4 2021",
        time: "08:00-23:00",
        website: "https://lan.vbuk.no"
      }
    ]
  })
};
</script>
