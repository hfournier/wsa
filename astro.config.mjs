import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  redirects: {
    "/stipendier-stiftelsen-infina-och-stiftelsen-independent-2":
      "/blog/stipendier-stiftelsen-infina-och-stiftelsen-independent-2",
    "/wsa-har-bitratt-rasta-vid-forvarv-av-serviceanlaggning":
      "/blog/wsa-har-bitratt-rasta-vid-forvarv-av-serviceanlaggning",
    "/ball-group-sverige-retail-ab-i-konkurs-zizzi-butikerna-i-sverige":
      "/blog/ball-group-sverige-retail-ab-i-konkurs-zizzi-butikerna-i-sverige",
    "/hoganas-saluhall-ab-i-konkurs": "/blog/hoganas-saluhall-ab-i-konkurs",
    "/nyhetsbrev-finansinspektionen-har-beslutat-om-andringar-av-finansinspektionens-foreskrifter":
      "/blog/nyhetsbrev-finansinspektionen-har-beslutat-om-andringar-av-finansinspektionens-foreskrifter",
    "/wsa-svarar-och-forklarar-varfor-overlats-fastigheter-paketerade-i-bolag":
      "/blog/wsa-svarar-och-forklarar-varfor-overlats-fastigheter-paketerade-i-bolag",
    "/avgorande-fran-hogsta-domstolen-avseende-s-k-kombinerade-upplatelser":
      "/blog/avgorande-fran-hogsta-domstolen-avseende-s-k-kombinerade-upplatelser",
    "/andrade-energihushallningsregler-for-byggnader":
      "/blog/andrade-energihushallningsregler-for-byggnader",
    "/nytt-forslag-ett-andamalsenligt-minoritetsskydd-i-aktiebolag-och-ekonomiska-foreningar":
      "/blog/nytt-forslag-ett-andamalsenligt-minoritetsskydd-i-aktiebolag-och-ekonomiska-foreningar",
    "/nya-riktlinjer-for-hantering-av-likviditetsstresstester-i-fonder":
      "/blog/nya-riktlinjer-for-hantering-av-likviditetsstresstester-i-fonder",
    "/wsa-stockholm-agerar-som-juridisk-radgivare-for-starbreeze":
      "/blog/wsa-stockholm-agerar-som-juridisk-radgivare-for-starbreeze",
    "/restaurang-hanoi-quan-huy-tien-ab-i-konkurs":
      "/blog/restaurang-hanoi-quan-huy-tien-ab-i-konkurs",
    "/omstallningsstod-for-foretag": "/blog/omstallningsstod-for-foretag",
    "/nyhetsbrev-finansinspektionen-beslutar-om-varning-och-sanktionsavgift-mot-skandia-liv":
      "/blog/nyhetsbrev-finansinspektionen-beslutar-om-varning-och-sanktionsavgift-mot-skandia-liv",
    "/hyresnedsattningen": "/blog/hyresnedsattningen",
    "/batra-food-ab-i-konkurs": "/blog/batra-food-ab-i-konkurs",
    "/sanktionsdirektivets-tillamplighet-vid-brott-mot-licensavtal":
      "/blog/sanktionsdirektivets-tillamplighet-vid-brott-mot-licensavtal",
    "/northern-spirit-forsaljning-ab-under-rekonstruktion":
      "/blog/northern-spirit-forsaljning-ab-under-rekonstruktion",
    "/nyhetsbrev-datainspektionen-beslutar-om-sanktionsavgift-avseende-nusvar-ab":
      "/blog/nyhetsbrev-datainspektionen-beslutar-om-sanktionsavgift-avseende-nusvar-ab",
    "/mkm-fastigheter-ab-i-konkurs": "/blog/mkm-fastigheter-ab-i-konkurs",
    "/konkursanbud-skanetruck-ab-i-konkurs":
      "/blog/konkursanbud-skanetruck-ab-i-konkurs",
    "/wsa-prefab-i-tranemo-ab-tranemo-g-betong-ab":
      "/blog/wsa-prefab-i-tranemo-ab-tranemo-g-betong-ab",
    "/wsa_dataline_alimak_group": "/blog/wsa_dataline_alimak_group",
    "/ac-golv-och-plattsattning-ab-i-konkurs-syd":
      "/blog/ac-golv-och-plattsattning-ab-i-konkurs-syd",
    "/wsa-har-bitratt-eton-innovation-ab-vid-forsaljningen-av-en-majoritetspost-i-eton-systems-ab":
      "/blog/wsa-har-bitratt-eton-innovation-ab-vid-forsaljningen-av-en-majoritetspost-i-eton-systems-ab",
    "/wsa-foretrader-fagerhult-vid-forvarvet-av-iguzzini-illuminazione-s-p-a":
      "/blog/wsa-foretrader-fagerhult-vid-forvarvet-av-iguzzini-illuminazione-s-p-a",
    "/preliminar-rekonstruktions-plan-for-starbreeze-ab-publ-starbreeze-studios-ab-starbreeze-publishing-ab-enterspace-ab-starbreeze-production-ab-enterspace-international-ab":
      "/blog/preliminar-rekonstruktions-plan-for-starbreeze-ab-publ-starbreeze-studios-ab-starbreeze-publishing-ab-enterspace-ab-starbreeze-production-ab-enterspace-international-ab",
    "/agarna-till-ocs-overhead-conveyor-system-ab-saljer-en-majoritetspost-till-axel-johnson-international-aktiebolag":
      "/blog/agarna-till-ocs-overhead-conveyor-system-ab-saljer-en-majoritetspost-till-axel-johnson-international-aktiebolag",
    "/pressmeddelande": "/blog/pressmeddelande",
    "/starbreeze-foretagsrekonstruktion-beslutad-av-stockholms-tingstatt":
      "/blog/starbreeze-foretagsrekonstruktion-beslutad-av-stockholms-tingstatt",
    "/helsingborgs-hockey-company-ab-under-foretagsrekonstruktion":
      "/blog/helsingborgs-hockey-company-ab-under-foretagsrekonstruktion",
    "/inbjudan-till-seminarium": "/blog/inbjudan-till-seminarium",
    "/avsnitt-1-vad-ar-egentligen-skillnaden-pa-en-advokat-och-en-jurist":
      "/blog/avsnitt-1-vad-ar-egentligen-skillnaden-pa-en-advokat-och-en-jurist",
    "/syndikering-som-investeringsform":
      "/blog/syndikering-som-investeringsform",
    "/offentlig-upphandling-ljus-i-ekonomiskt-morker":
      "/blog/offentlig-upphandling-ljus-i-ekonomiskt-morker",
    "/studentmedarbetare-goteborg-230425":
      "/blog/studentmedarbetare-goteborg-230425",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-apomera-ab-vid-kapitalanskaffning-genom-en-riktad-nyemission-till-bl-a-apotea":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-apomera-ab-vid-kapitalanskaffning-genom-en-riktad-nyemission-till-bl-a-apotea",
    "/force-majeure-vid-storningar-i-energiforsorjning":
      "/blog/force-majeure-vid-storningar-i-energiforsorjning",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-ntex-vid-investering-i-rumblestrip-och-tecknande-av-avtal-avseende-bolagets-saas-tjanst-better-truckin":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-ntex-vid-investering-i-rumblestrip-och-tecknande-av-avtal-avseende-bolagets-saas-tjanst-better-truckin",
    "/ny-lag-for-visselblasning-vi-hjalper-dig":
      "/blog/ny-lag-for-visselblasning-vi-hjalper-dig",
    "/julhalsning-fran-oss": "/blog/julhalsning-fran-oss",
    "/konkursanbud-restaurang-pub-norrbro":
      "/blog/konkursanbud-restaurang-pub-norrbro",
    "/wsa-bitrader-medicanatumin-ab-publ-vid-overlatelse-av-verksamheten":
      "/blog/wsa-bitrader-medicanatumin-ab-publ-vid-overlatelse-av-verksamheten",
    "/g-star-raw-sverige-i-konkurs": "/blog/g-star-raw-sverige-i-konkurs",
    "/jazzklubben-nefertiti-ab": "/blog/jazzklubben-nefertiti-ab",
    "/foretagsrekonstruktion_och_coronapandemin":
      "/blog/foretagsrekonstruktion_och_coronapandemin",
    "/wesslau-soderqvist-advokatbyra-sammanfattning-avseende-covid-19":
      "/blog/wesslau-soderqvist-advokatbyra-sammanfattning-avseende-covid-19",
    "/nyhetsbrev-rekommendationer-med-anledning-av-datainspektionens-rapport-om-personuppgiftsincidenter":
      "/blog/nyhetsbrev-rekommendationer-med-anledning-av-datainspektionens-rapport-om-personuppgiftsincidenter",
    "/nyhetsbrev-kommittedirektiv-om-starkta-atgarder-mot-penningtvatt-och-finansiering-av-terrorism-samt-nytt-eu-direktiv-gallande-straffrattsliga-bestammelser":
      "/blog/nyhetsbrev-kommittedirektiv-om-starkta-atgarder-mot-penningtvatt-och-finansiering-av-terrorism-samt-nytt-eu-direktiv-gallande-straffrattsliga-bestammelser",
    "/wsa-har-bitratt-hokerum-fastigheter-ab-vid-forvarv-av-centrumfastighet-i-huskvarna":
      "/blog/wsa-har-bitratt-hokerum-fastigheter-ab-vid-forvarv-av-centrumfastighet-i-huskvarna",
    "/anbudsunderlag-ac-golv-och-plattsattning-umea-lulea-och-boden":
      "/blog/anbudsunderlag-ac-golv-och-plattsattning-umea-lulea-och-boden",
    "/wsa-deltar-pa-stora-formedlarmassan-i-stockholm":
      "/blog/wsa-deltar-pa-stora-formedlarmassan-i-stockholm",
    "/stipendier-att-soka-for-doktorander-i-stockholm-2":
      "/blog/stipendier-att-soka-for-doktorander-i-stockholm-2",
    "/vart-har-konkurserna-tagit-vagen-om-nya-regler-for-en-effektivare-konkurshantering":
      "/blog/vart-har-konkurserna-tagit-vagen-om-nya-regler-for-en-effektivare-konkurshantering",
    "/ny-lagstiftning-kan-ge-inhyrd-personal-ratt-till-anstallning":
      "/blog/ny-lagstiftning-kan-ge-inhyrd-personal-ratt-till-anstallning",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-hakan-eriksson-i-umea-ab-vid-overlatelse-av-aktierna-i-flottarbyn-ab":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-hakan-eriksson-i-umea-ab-vid-overlatelse-av-aktierna-i-flottarbyn-ab",
    "/wsa-har-bitratt-saljaren-vid-overlatelsen-av-porsche-center-umea-till-hedin-performance-cars-ab":
      "/blog/wsa-har-bitratt-saljaren-vid-overlatelsen-av-porsche-center-umea-till-hedin-performance-cars-ab",
    "/rekonstruktionsplan-starbreeze-ab-publ-starbreeze-publishing-ab-starbreeze-studios-ab-och-starbreeze-production-ab":
      "/blog/rekonstruktionsplan-starbreeze-ab-publ-starbreeze-publishing-ab-starbreeze-studios-ab-och-starbreeze-production-ab",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-presto-brandsakerhet-ab":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-presto-brandsakerhet-ab",
    "/boob_design_ab_boob_ab": "/blog/boob_design_ab_boob_ab",
    "/konkursanbud-katani-ab": "/blog/konkursanbud-katani-ab",
    "/konkursanbud-rehab-simlangsgarden-ab-i-konkurs":
      "/blog/konkursanbud-rehab-simlangsgarden-ab-i-konkurs",
    "/hog-tid-att-se-over-uppdragsavtal-om-molntjanster":
      "/blog/hog-tid-att-se-over-uppdragsavtal-om-molntjanster",
    "/lyssna-pa-var-podd-hajar-du": "/blog/lyssna-pa-var-podd-hajar-du",
    "/nyhetsbrev-arbetsratt-oktober-2019":
      "/blog/nyhetsbrev-arbetsratt-oktober-2019",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-kaj-johansson-gruppen-ab-vid-overlatelse-av-aktierna-i-kaj-johansson-fastigheter-ab":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-kaj-johansson-gruppen-ab-vid-overlatelse-av-aktierna-i-kaj-johansson-fastigheter-ab",
    "/stort-antal-besokare-pa-wesslau-soderqvists-frukostseminarium-om-idd-och-mifid-ii":
      "/blog/stort-antal-besokare-pa-wesslau-soderqvists-frukostseminarium-om-idd-och-mifid-ii",
    "/wsa-fraq-forvarv-gina-tricot": "/blog/wsa-fraq-forvarv-gina-tricot",
    "/fullsatt-pa-wesslau-soderqvists-frukostseminarium-om-gdpr":
      "/blog/fullsatt-pa-wesslau-soderqvists-frukostseminarium-om-gdpr",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-germ-invest-ab-vid-overlatelse-av-aktierna-i-germ-ab":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-germ-invest-ab-vid-overlatelse-av-aktierna-i-germ-ab",
    "/forzab-trailer-ab-i-konkurs": "/blog/forzab-trailer-ab-i-konkurs",
    "/konkursanbud-pansante-ab": "/blog/konkursanbud-pansante-ab",
    "/generosare-regler-for-kvalificerade-personaloptioner":
      "/blog/generosare-regler-for-kvalificerade-personaloptioner",
    "/nuhetsbrev-finansinspektionen-beslutar-om-varning-och-sanktionsavgift-om-300-miljoner-kronor-for-nasdaq-clearing-aktiebolag":
      "/blog/nuhetsbrev-finansinspektionen-beslutar-om-varning-och-sanktionsavgift-om-300-miljoner-kronor-for-nasdaq-clearing-aktiebolag",
    "/skarpta-krav-vid-konsumentmarknadsforing-fran-den-1-september-2022":
      "/blog/skarpta-krav-vid-konsumentmarknadsforing-fran-den-1-september-2022",
    "/ny-patalandeskyldighet-for-anbudsgivare":
      "/blog/ny-patalandeskyldighet-for-anbudsgivare",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-grundarna-av-revolutionrace-vid-noteringen-av-bolaget-pa-nasdaq":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-grundarna-av-revolutionrace-vid-noteringen-av-bolaget-pa-nasdaq",
    "/konkursanbud-bjuvs-gatukok-ab": "/blog/konkursanbud-bjuvs-gatukok-ab",
    "/tingsratten-beslutar-att-foretagsrekonstruktionen-i-oboya-horticulture-industries-ab-publ-ska-upphora":
      "/blog/tingsratten-beslutar-att-foretagsrekonstruktionen-i-oboya-horticulture-industries-ab-publ-ska-upphora",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-allmiljo-i-umea-ab-vid-overlatelse-av-atervinningsverksamheter":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-allmiljo-i-umea-ab-vid-overlatelse-av-atervinningsverksamheter",
    "/wsa-har-bitratt-vid-forsaljningen-av-kids-concept-ab-till-network-of-design-ab":
      "/blog/wsa-har-bitratt-vid-forsaljningen-av-kids-concept-ab-till-network-of-design-ab",
    "/wsa-har-bitratt-vid-forsaljningen-av-samtliga-aktier-i-kryddhuset-i-ljung-ab-till-bayn-group-ab":
      "/blog/wsa-har-bitratt-vid-forsaljningen-av-samtliga-aktier-i-kryddhuset-i-ljung-ab-till-bayn-group-ab",
    "/wesslau-soderqvist-advokatbyra-vinner-upphandlingsmal-i-hogsta-forvaltningsdomstolen":
      "/blog/wesslau-soderqvist-advokatbyra-vinner-upphandlingsmal-i-hogsta-forvaltningsdomstolen",
    "/lyckad-foretagsrekonstruktion-for-bryggeriverksamhet-i-karlstad":
      "/blog/lyckad-foretagsrekonstruktion-for-bryggeriverksamhet-i-karlstad",
    "/energi-och-miljo-i-fokus-pa-wsa-i-goteborg":
      "/blog/energi-och-miljo-i-fokus-pa-wsa-i-goteborg",
    "/wsa-foretrader-vid-forsaljning-av-hall-media-ab":
      "/blog/wsa-foretrader-vid-forsaljning-av-hall-media-ab",
    "/mot-vart-miljo-och-energiteam": "/blog/mot-vart-miljo-och-energiteam",
    "/wsas-samarbete-med-inklab-i-boras":
      "/blog/wsas-samarbete-med-inklab-i-boras",
    "/vi-ger-dig-svar-pa-dina-fragor-nar-din-arbetsgivare-gar-i-konkurs":
      "/blog/vi-ger-dig-svar-pa-dina-fragor-nar-din-arbetsgivare-gar-i-konkurs",
    "/stipendier-att-soka-for-doktorander-i-stockholm":
      "/blog/stipendier-att-soka-for-doktorander-i-stockholm",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-vid-forsaljningen-av-fiber-och-elkraft-i-norr-ab":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-vid-forsaljningen-av-fiber-och-elkraft-i-norr-ab",
    "/tuhinredning-hjalmar-och-hedda-ab-i-konkurs":
      "/blog/tuhinredning-hjalmar-och-hedda-ab-i-konkurs",
    "/wesslau-soderqvist-advokatbyra-oppnar-kontor-i-kalmar":
      "/blog/wesslau-soderqvist-advokatbyra-oppnar-kontor-i-kalmar",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-presto-ab-vid-forvarv-av-dahl-medical-ab":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-presto-ab-vid-forvarv-av-dahl-medical-ab",
    "/skogsbolag-fick-ratt-till-ersattning-fran-staten-nytt-avgorande-fran-hd":
      "/blog/skogsbolag-fick-ratt-till-ersattning-fran-staten-nytt-avgorande-fran-hd",
    "/wsa-radgivare-till-fagerhult-vid-forvarvet-av-veko-lightsystems-international-b-v":
      "/blog/wsa-radgivare-till-fagerhult-vid-forvarvet-av-veko-lightsystems-international-b-v",
    "/har-du-personligt-ansvar-for-aktiebolagets-skulder":
      "/blog/har-du-personligt-ansvar-for-aktiebolagets-skulder",
    "/pacson-sverige-ab-far-ny-agare": "/blog/pacson-sverige-ab-far-ny-agare",
    "/konkursvagen-sa-ar-du-forberedd": "/blog/konkursvagen-sa-ar-du-forberedd",
    "/konkursforsaljning-av-padelbanor-och-utrustning":
      "/blog/konkursforsaljning-av-padelbanor-och-utrustning",
    "/att-tanka-pa-vid-influencer-marketing":
      "/blog/att-tanka-pa-vid-influencer-marketing",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-peab-anlaggning-ab-vid-overlatelse-av-aktierna-i-hagstrom-i-nas-ab":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-peab-anlaggning-ab-vid-overlatelse-av-aktierna-i-hagstrom-i-nas-ab",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-rasta-sverige-ab-vid-forvarv-av-en-vagserviceanlaggning-i-grastorp":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-rasta-sverige-ab-vid-forvarv-av-en-vagserviceanlaggning-i-grastorp",
    "/vi-soker-studentmedarbetare-till-vart-kontor-i-goteborg":
      "/blog/vi-soker-studentmedarbetare-till-vart-kontor-i-goteborg",
    "/wesslau-soderqvist-advokatbyra-har-bitratt-fort-knox-forvaring-ab-i-samband-med-att-det-amerikanska-lakemedelsbolaget-cambrian-bio-investerar-270-miljoner-kronor-i-life-sciencebolaget-betagenon-ab":
      "/blog/wesslau-soderqvist-advokatbyra-har-bitratt-fort-knox-forvaring-ab-i-samband-med-att-det-amerikanska-lakemedelsbolaget-cambrian-bio-investerar-270-miljoner-kronor-i-life-sciencebolaget-betagenon-ab",
    "/vad-hander-med-min-fordran-i-en-konkurs":
      "/blog/vad-hander-med-min-fordran-i-en-konkurs",
    "/forandringar-i-eus-handel-med-utslappsratter":
      "/blog/forandringar-i-eus-handel-med-utslappsratter",
    "/ny-upplaga-av-data-protection-privacy-lexology-gtdt":
      "/blog/ny-upplaga-av-data-protection-privacy-lexology-gtdt",
    "/utokad-informationsskyldighet-i-andrade-las-regler":
      "/blog/utokad-informationsskyldighet-i-andrade-las-regler",
    "/faststallt-ackord-for-starbreeze-ab-starbreeze-production-ab-starbreeze-studios-ab-och-starbreeze-publishing-ab":
      "/blog/faststallt-ackord-for-starbreeze-ab-starbreeze-production-ab-starbreeze-studios-ab-och-starbreeze-publishing-ab",
    "/tingsratten-faststaller-cofa-plastic-aktiebolags-forslag-till-ackord":
      "/blog/tingsratten-faststaller-cofa-plastic-aktiebolags-forslag-till-ackord",
    "/corona": "/blog/corona",
    "/minimera-din-riskexponering-som-leverantor":
      "/blog/minimera-din-riskexponering-som-leverantor",
    "/inbjudan-till-frukostseminarium-den-29-november-2019-i-stockholm":
      "/blog/inbjudan-till-frukostseminarium-den-29-november-2019-i-stockholm",
    "/konkursanbud-visiondesk-i-sverige-ab":
      "/blog/konkursanbud-visiondesk-i-sverige-ab",
    "/wesslau-soderqvist-har-framgangsrikt-foretratt-ryanair-i-flera-mal-upp-till-hogsta-domstolen":
      "/blog/wesslau-soderqvist-har-framgangsrikt-foretratt-ryanair-i-flera-mal-upp-till-hogsta-domstolen",
    "/energispaning": "/blog/energispaning",
    "/nya-regler-i-lagen-om-anstallningsskydd":
      "/blog/nya-regler-i-lagen-om-anstallningsskydd",
    "/ny-konkursforvaltare": "/blog/ny-konkursforvaltare",
    "/konkursanbud-helinetworks-international-ab":
      "/blog/konkursanbud-helinetworks-international-ab",
    "/fullsatt-frukostseminarium-om-ebas-riktlinjer-om-outsourcing-och-nya-penningtvattsregler":
      "/blog/fullsatt-frukostseminarium-om-ebas-riktlinjer-om-outsourcing-och-nya-penningtvattsregler",
    "/ny-konkursforvaltare-2": "/blog/ny-konkursforvaltare-2",
    "/kvallsevenemang-hur-kan-man-skydda-sig-mot-f-d-anstallda-som-startar-konkurrerande-verksamhet":
      "/blog/kvallsevenemang-hur-kan-man-skydda-sig-mot-f-d-anstallda-som-startar-konkurrerande-verksamhet",
    "/frukostseminarium": "/blog/frukostseminarium",
    "/nya-delagare-hos-wesslau-soderqvist-advokatbyra":
      "/blog/nya-delagare-hos-wesslau-soderqvist-advokatbyra",
    "/konkursassistent-till-wsa-i-goteborg":
      "/blog/konkursassistent-till-wsa-i-goteborg",
    "/sanktionsbeslut_gdpr": "/blog/sanktionsbeslut_gdpr",
    "/ny-advokat": "/blog/ny-advokat",
    "/wsa-har-bitratt-ab-fagerhult-publ-vid-forvarvet-av-iguzzini-illuminazione-s-p-a":
      "/blog/wsa-har-bitratt-ab-fagerhult-publ-vid-forvarvet-av-iguzzini-illuminazione-s-p-a",
    "/konkursanbud-delish-bakehouse-stockholm-ab":
      "/blog/konkursanbud-delish-bakehouse-stockholm-ab",
    "/konkursanbud-ab-husbyggarna-i-kungens-kurva":
      "/blog/konkursanbud-ab-husbyggarna-i-kungens-kurva",
    "/stipendier-stiftelsen-infina-och-stiftelsen-independent":
      "/blog/stipendier-stiftelsen-infina-och-stiftelsen-independent",
    "/wesslau-soderqvist-advokatbyra-soker-receptionist-till-stockholmskontoret":
      "/blog/wesslau-soderqvist-advokatbyra-soker-receptionist-till-stockholmskontoret",
    "/stort-antal-besokare-pa-wesslau-soderqvists-frukostseminarium-om-hallbarhet-och-aktieagarengagemang":
      "/blog/stort-antal-besokare-pa-wesslau-soderqvists-frukostseminarium-om-hallbarhet-och-aktieagarengagemang",
  },
});
