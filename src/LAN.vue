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
                Vaksdal barne- og undomskorps arrangerer LAN-party i Turbinen på Dale i Vaksdal kommune / Vestland fylke neste år nærmere bestemt lørdag 17. april 2021. Turbinen befinner seg på Dale i Vaksdal kommune i Vestland fylke.
                Datatreffet vil foregå i 15 timer fra kl 08:00 om morgenen til kl 23:00 om kvelden. Arrangementet er rusfritt og åpent for alle.
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
            <Post title="Hva er et LAN-party?">
              <p>
                Et LAN-party eller på godt norsk datatreff er et samlingssted hvor man tar med seg sin egen datamaskin, konsoll som t.d. PlayStation eller XBOX og kobler seg til et lokalt nettverk for å spille eller gjøre andre ting sammen.
                Om man ikke har egen PC/konsoll kan man også bare kjøpe besøksbillett, koble seg til det trådløse nettet med mobil/nettbrett og være med andre som har med seg PC/konsoll.
              </p>
              <b>Huskeliste:</b>
              <ul>
                <li>PC/konsoll</li>
                <li>Skjerm</li>
                <li>Nettverkskabel</li>
                <li>Strømforgrener om man har behov for flere enn en stikkontakt t.d. PC/konsoll + skjerm</li>
              </ul>
              <br>
              <p>
                På VBUK LAN blir det også kiosk som er åpen kl 10-18 og 19-21.
                Det vil også bli arrangert noen konkurranser underveis deriblant byggekonkurranse i Minecraft, hva som skal bygges annonseres kl 10 lørdag 17.4.2021.
              </p>
            </Post>
          </v-flex>
          <v-flex x12 sm6 md4>
            <Post title="Billetter">
              <v-list-item three-line>
                <v-list-item-content>
                  Det selges billetter til mørk sone i sal, lys sone i foaje og til live stream.<br><br>
                  <a target="_blank" style="font-size: 14pt;" href="https://vbuk.ticketco.events/no/nb/e/vbuklan2021/lan.vbuk.no">Klikk her for å kjøpe billett</a>
                </v-list-item-content>
              </v-list-item>
            </Post>
            <Post title="Korona og live stream">
              Vi satser på at hver deltager får vært sitt store bord slik at man holder avstand. Hvis det mot formodning ikke skulle gå an å arrangere VBUK LAN fysisk i 2021 så 
              vil biletten bli omgjort til live stream billett.<br><br>
              Live stream vil det uansett bli enten fra Turbinen eller fra et passende sted om det ikke lar seg gjøre med fysisk datatreff slik at planlagte konkurranser vil bli gjennomført uansett.
            </Post>
            <Post title="Program">
              <ul>
                <li>Kl 08 - Registrering</li>
                <li>Kl 10 - Minecraft byggekonkurranse #1</li>
                <li>Kl 12 - Minecraft byggekonkurranse #2</li>
                <li>Kl 14 - Instrument racer konkurranse</li>
                <li>Kl 16 - Quiz</li>
                <li>Kl 18 - VBUK konsert</li>
                <li>
                  Kl 20 - Avstemming byggekonkurranser på Discord (
                  <a
                    href="https://chat.vbuk.no"
                  >chat.vbuk.no</a>) #konkurranse
                </li>
                <li>Kl 22 - Premieutdeling</li>
                <li>Kl 23 - Ferdig</li>
              </ul>
            </Post>
            <Post title="Regler">
              <ul>
                <li>Alle inne i hallen må ha adgangsbånd</li>
                <li>Rusfritt arrangement</li>
                <li>Du er selv ansvarlig for eget utstyr</li>
                <li>Fremvisning av upassende innhold er ikke tillatt</li>
                <li>Spillene du får spille hjemme gjelder også her</li>
              </ul>
            </Post>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <Newsletter form="2582612:q4l4t5"/>
            <Contact/>
            <Post>
              <v-img src="multicom.png"/>
            </Post>
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

export default {
  name: "LAN",
  components: {
    Post, Contact, Newsletter
  }
};
</script>
