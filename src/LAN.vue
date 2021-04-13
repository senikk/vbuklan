<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VBUK LAN</span>
        <span class="font-weight-light">17. april 2021</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="/" target="_blank">
        <span class="mr-2">OM VBUK</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container lighten-5 grid-list-md text-xs-center>
        <v-layout row>
          <v-flex xs12 sm6 md5>
            <Post title="Velkommen til LAN-party i Turbinen">
              <p>
                Vaksdal barne- og undomskorps arrangerer LAN-party i Turbinen på Dale i Vaksdal kommune / Vestland fylke lørdag 17. april 2021. Turbinen befinner seg på Dale i Vaksdal kommune i Vestland fylke.
                Arrangementet vil foregå i 15 timer fra kl 08:00 om morgenen til kl 23:00 om kvelden. Arrangementet er rusfritt og åpent for barn og unge under 20 år bosatt i Vaksdal kommune, alle andre kan delta via vår Discord server hvor man kontakter vår billettluke bot med referanse på billett man har kjøpt.
              </p>
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.515088122249!2d5.818765!3d60.5833178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80f4f823c1fde819!2sTurbinen+Fleirbrukshall!5e0!3m2!1sno!2sno!4v1555135944247!5m2!1sno!2sno"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                ></iframe>
              </p>
            </Post>
            <Post title="Live stream">
                Live stream foregår på <a href="https://tv.vbuk.no">tv.vbuk.no</a>
                <v-data-table
                  :headers="calendarh"
                  :items="live"
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
          <v-flex x12 sm6 md4>
            <Post title="Billetter">
              <v-list-item three-line>
                <v-list-item-content>
                  Det selges billetter til mørk sone i sal og til Discord om du ønsker å delta digitalt. Fysisk billett blir omgjort til Discord billet om det skulle bli nye restriksjoner grunnet korona.<br><br>
                  <a target="_blank" style="font-size: 14pt;" href="https://vbuk.ticketco.events/no/nb/e/vbuklan2021/lan.vbuk.no">Klikk her for å kjøpe billett</a>
                </v-list-item-content>
              </v-list-item>
            </Post>
            <Post title="VBUK LAN 2021">
              Hver deltager får hvert sitt store bord slik at man holder god avstand. Bestilling av kioskvarer med levering direkte til bord. Hvis det mot formodning ikke skulle gå an å arrangere VBUK LAN fysisk i 2021 heller så 
              vil man fortsatt kunne logge seg på hjemmefra på <a href="https://chat.vbuk.no">chat.vbuk.no</a> hvor man får tilgang til lukket innhold ved hjelp av billettreferansen. Så arrangement blir det uansett i år.
            </Post>
            <Post title="Hva er et LAN-party?">
              <p>
                Et LAN-party eller på godt norsk datatreff er et samlingssted hvor man tar med seg sin egen datamaskin, konsoll som t.d. PlayStation eller XBOX og kobler seg til et lokalt nettverk for å spille eller gjøre andre ting sammen.
                Om man ikke har egen PC/konsoll kan man også bare kjøpe besøksbillett, koble seg til det trådløse nettet med mobil/nettbrett og være med andre som har med seg PC/konsoll.
              </p>
              <b>Huskeliste:</b>
              <ul>
                <li>PC/konsoll</li>
                <li>Skjerm</li>
                <li>Nettverkskabel 10m+</li>
                <li>Strømforgrener om man har behov for flere enn en stikkontakt t.d. PC/konsoll + skjerm</li>
              </ul>
            </Post>
            <Post title="Regler">
              <ul>
                <li>Fysiske billetter kun tilgjengelig for barn og unge under 20 år bosatt i Vaksdal kommune</li>
                <li>Alle inne i hallen må ha adgangsbånd</li>
                <li>Rusfritt arrangement</li>
                <li>Du er selv ansvarlig for eget utstyr</li>
                <li>Fremvisning av upassende innhold er ikke tillatt</li>
                <li>Spillene du får spille hjemme gjelder også her</li>
              </ul>
            </Post>
            <Post title="Premier">
              <ul>
                <li>Minecraft creative, bygg din egen premie
                  <ul><li>1. plass 500,- Multicom + merchpakke</li><li>2. plass 200,- VBUK</li><li>3. plass Multicom t-skjorte + drikkeflaske</li></ul>
                </li>
                <li>Minecraft hungergame
                  <ul><li>1. plass billett klatreparken Voss 1 person ca 400,-</li><li>2. premie 200,- VBUK</li><li>3. premie Multicom t-skjorte + drikkeflaske</li></ul>
                </li>
                <li>Among Us konkurranse
                  <ul><li>1. plass 500,- gavekort Voss kommunikasjon</li><li>2. plass 200,- VBUK</li><li>3. plass Multicom t-skjorte + drikkeflaske</li></ul>
                </li>
                <li>Rocket League 2 per lag, lagpremie under + merch ting til hver av de fire på pallen
                  <ul><li>1. plass 600,- VBUK</li><li>2. plass 400,- VBUK</li></ul>
                </li>
                <li>Videodubbing
                  <ul><li>1. plass Marantz Umpire USB Mikrofon 620,- fra Voss Musikk</li><li>2. plass To stk kinobilletter fra Modalen kommune verdi ca 240,-</li><li>3. plass Multicom t-skjorte + drikkeflaske</li></ul>
                </li> 
              </ul>
            </Post>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <Newsletter form="2582612:q4l4t5"/>
            <Contact/>
            <Ad src="vossk.png"/>
            <Ad src="multicom.png"/>
            <Ad src="vossmusikk.png"/>
            <Ad src="klatreparken.png"/>
            <Ad src="modalen-kommune.png"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Post from "./components/Post";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Ad from "./components/Ad";

export default {
  name: "LAN",
  components: {
    Post, Contact, Newsletter, Ad
  },
  data: () => ({
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
    live: [
      {
        title: "Stream 1 - Terje Pedersen og Emil Walseth (emwaAdventure)",
        location: "Twitch",
        day: "Lørdag 17.4.2021",
        time: "09:00-11:00",
        website: "https://tv.vbuk.no"
      },
      {
        title: "Stream 2 - Terje Pedersen",
        location: "Twitch",
        day: "Lørdag 17.4.2021",
        time: "16:00-18:00",
        website: "https://tv.vbuk.no"        
      },
      {
        title: "Stream 3 - Terje Pedersen og Emil Walseth (emwaAdventure)",
        location: "Twitch",
        day: "Lørdag 17.4.2021",
        time: "21:00-23:00",
        website: "https://tv.vbuk.no"
      },
      {
        title: "Premieutdeling",
        location: "Twitch",
        day: "Lørdag 17.4.2021",
        time: "22:00-",
        website: "https://tv.vbuk.no"
      },
    ],
    calendar: [
      {
        title: "VBUK LAN 2021",
        location: "Turbinen/Discord",
        day: "Lørdag 17.4.2021",
        time: "08:00-23:00",
        website: "https://chat.vbuk.no"
      },
      {
        title: "Minecraft bygg din premie konkurranse",
        location: "mc.vbuk.no",
        day: "Lørdag 17.4.2021",
        time: "08:00-21:00",
        website: "https://chat.vbuk.no"
      },
      {
        title: "Videodubbing konkurranse",
        location: "Discord",
        day: "Lørdag 17.4.2021",
        time: "08:00-21:00",
        website: "https://chat.vbuk.no"
      },
      {
        title: "Minecraft Hungergame konkurranse",
        location: "mc.vbuk.no",
        day: "Lørdag 17.4.2021",
        time: "10:00-",
        website: "https://chat.vbuk.no"
      },
      {
        title: "Among Us konkurranse",
        location: "Discord",
        day: "Lørdag 17.4.2021",
        time: "13:00-",
        website: "https://chat.vbuk.no"
      },
      {
        title: "Rocket League konkurrane 2 per lag",
        location: "Discord",
        day: "Lørdag 17.4.2021",
        time: "17:00-",
        website: "https://chat.vbuk.no"
      },
      {
        title: "Premieutdeling",
        location: "Twitch",
        day: "Lørdag 17.4.2021",
        time: "22:00-",
        website: "https://tv.vbuk.no"
      }
    ]
  })
};
</script>
