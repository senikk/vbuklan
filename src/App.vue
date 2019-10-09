<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VBUK LAN</span>
        <span class="font-weight-light"> 14. mars 2020</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://vbuk.no"
        target="_blank"
      >
        <span class="mr-2">vbuk.no</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container lighten-5 grid-list-md text-xs-center>
        <v-layout row>
          <v-flex xs5>
            <Post title="Velkommen til LAN-party i Turbinen">
              <p>
              Vaksdal barne- og undomskorps arrangerer LAN-party i Turbinen på Dale i Vaksdal kommune / Hordaland neste år nærmere bestemt lørdag 14. mars 2020. Turbinen befinner seg på Dale i Vaksdal kommune i Hordaland fylke.
              LANet vil foregå i 15 timer fra kl 08:00 om morgenen til kl 23:00 om kvelden. Arrangementet er rusfritt og åpent for alle.
              </p>
              <p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.515088122249!2d5.818765!3d60.5833178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80f4f823c1fde819!2sTurbinen+Fleirbrukshall!5e0!3m2!1sno!2sno!4v1555135944247!5m2!1sno!2sno" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
              </p>
            </Post>
          </v-flex>
          <v-flex xs4>
            <Post title="Kjøpe billett?">
              <v-list-item>
                <v-list-item-content>
                  Billetter til VBUK LAN kan kjøpes fra Vipps-menyen på Vippsnr 11529. Skann QR-koden nedenfor med Vipps-appen og gå til menyen.
                </v-list-item-content>
              </v-list-item>
              <v-img height="350px" width="350px" src="vipps-qr.png" />
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title>Billett med bordplassering 
                    <v-chip class="ma-2" color="green" text-color="white">150,-</v-chip>
                  </v-list-item-title>
                  <v-list-item-subtitle wrap>Stikkontakt og ethernet tilkobling. Konsert kl 18 med spillmusikk. Billet for ikke medlem.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title>Besøksbillett
                    <v-chip class="ma-2" color="green" text-color="white">50,-</v-chip>
                  </v-list-item-title>
                  <v-list-item-subtitle>Trådløst nett. Konsert kl 18 med spillmusikk. Billet for ikke medlem.</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </Post>
          </v-flex>
          <v-flex xs3>
            <Post title="Kontakt">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-email</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title><a href="mailto:post@vbuk.no">post@vbuk.no</a></v-list-item-title>
                    <v-list-item-subtitle>E-post</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-phone</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title><a href="tel:91334697">91334697</a></v-list-item-title>
                    <v-list-item-subtitle>Telefon</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </Post>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Post from './components/Post';

export default {
  name: 'App',
  components: {
    Post
  },
  data: () => ({
    //
  }),
};
</script>
