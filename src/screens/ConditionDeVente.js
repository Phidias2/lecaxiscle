import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
const ConditionVente = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Article 1 : Préambule',
      content: 'Les présentes Conditions Générales de Vente et d’Utilisation définissent l’utilisation « LECAXISCLE » accessible à l’adresse https://www.lecaxiscle.com. Elles régissent les relations entre l’utilisateur et le Site. Les informations collectées sur le site internet https://www.lecaxiscle.com sont destinées au seul usage de la société et ne seront en aucun cas mises à disposition de tierces parties.'
    },
    {
      title: 'Article 2 – Dispositions générales',
      content: `Les présentes conditions générales de vente (ci-après les CGV) sont applicables à la vente en ligne des services de la Société sur le Site, dont l’accès est libre et gratuit à tout internaute, sous réserve des accès payants faisant partie des services offerts par la Société.

      Les CGV sont opposables au Client qui reconnaît, en avoir eu connaissance et les avoir acceptées avant de passer commande. L’acceptation des présentes CGV par le Client intervient le jour auquel il souscrit à son Abonnement et ce pour la durée de l’abonnement prévue aux présentes CGV. La validation de la commande par sa confirmation vaut adhésion par le Client aux CGV en vigueur au jour de la commande dont la conservation et la reproduction sont assurées par la Société.
      
      A titre essentiel et déterminant, le Client reconnaît avoir dix-huit ans révolus au jour de l’adhésion aux CGV, avoir la capacité requise pour contracter et acquérir les Services proposés par la Société.
      
      La Société se réserve la faculté de modifier ses CGV à tout moment. En cas de modification des CGV, les CGV applicables sont celles en vigueur à la date de la commande dont une copie datée à ce jour peut être remise à sa demande au Client.
      `,
    },
    {
      title: 'Article 3 – Services proposés',
      content: `
      Les services offerts à la vente par la Société font l’objet d’un descriptif détaillé sur le Site. La Société offre aux consommateurs non professionnels un service d’information sur les tendances en matière de performances et résultats sportifs (ci-après le “Service”) depuis leur authentification via leur compte personnel.
      
      Les photographies illustrant les Services ne constituent pas un document contractuel.
      
      L’accès au Site et au Service est consenti à titre personnel et non cessible. Le Client s’interdit de concéder, vendre, revendre, transférer, céder, distribuer ou exploiter à des fins commerciales, ou mettre autrement à disposition d’un tiers non autorisé les informations accessibles sur le Site ou dans le cadre du Service d’une quelconque façon. Les Services sont offerts et disponibles dès paiement par le Client et encaissement effectif par la Société du premier versement de son abonnement.
      
      `,
    },
    {
      title: 'Article 4 – Compte personnel',
      content: `Pour pouvoir passer commande, le Client doit préalablement créer son compte client sur le Site. Le Client s’engage à fournir des informations vraies, exactes et complètes comme demandées dans le formulaire d’inscription et à les tenir à jour sans délai.

      A titre essentiel et déterminant, le Client déclare et garantit : 
      
      – qu’il a dix-huit ans révolus au jour de l’adhésion aux CGV.
      
      – avoir la capacité requise pour contracter les Services proposés par la Société. 
      
      – avoir vérifié que la configuration électronique utilisée ne contient aucun virus et qu’elle est en parfait état de fonctionnement.
      
      Dans l’hypothèse où le Client fournirait des informations fausses, inexactes, périmées ou incomplètes, la Société est en droit de suspendre et/ou de résilier son abonnement et de lui refuser, immédiatement et pour le futur, l’accès à tout ou partie du Site
      
      Le Client s’engage à conserver ses identifiant et mot de passe secrets et s’interdit de les divulguer sous quelque forme que ce soit à des tiers. A cet égard, le Client a la possibilité de s’assurer qu’à l’issue de chaque session, il peut se déconnecter explicitement.
      
      En cas de perte, de vol ou de divulgation accidentelle de ses identifiant et mot de passe, le Client doit en informer sans délai, le service clients de la Société, par courrier électronique, qui procèdera alors à l’annulation dans les meilleurs délais des identifiant et mot de passe du Client. Le Client recevra un nouvel accès avec de nouveaux identifiants et mot de passe.
      
      Le Client ne peut céder tout ou partie des droits et obligations résultant de son abonnement qu’après accord préalable et écrit de la Société et sous réserve que soient strictement respectées les présentes Conditions générales de vente.
      `,
    },
    {
      title: 'Article 5 – Contrat d’abonnement',
      content: `Les différentes formules d’abonnement proposées par la Société figurent sur le site.

      Pour les personnes qui ont recréer un nouveau compte et sont débité plusieurs fois, le service client ne peut pas rembourser l’abonnement mais procédera à 1 mois offert sur votre compte de la première souscription.
      Conclusion
      
      Le contrat est formé au moment de l’envoi par le Client de la confirmation de sa commande par le procédé du clic en ligne. L’acceptation de l’offre par le Client est validée, conformément au procédé du clic, par la confirmation de la commande. Avant de cliquer sur le bouton « Confirmer », le Client a la possibilité de vérifier le détail de sa commande et son prix total et de revenir aux pages précédentes pour corriger d’éventuelles erreurs ou éventuellement modifier sa commande. Il appartient au Client de vérifier sa capacité à passer la commande, l’exactitude de la commande et de signaler immédiatement toute erreur. Toute commande passée sur le site constitue la formation d’un contrat conclu à distance entre le Client et la Société.
      
      La confirmation de la commande entraîne acceptation des CGV et forme le contrat.
      
      RENONCIATION AU DROIT DE RETRACTATION
      
      Conformément à l’article XXXXXXXXXXXXXX du code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d’un contenu numérique non fourni sur un support matériel dont l’exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.
      
      Ainsi, avant la conclusion du contrat d’abonnement, le Client accepte expressément de renoncer à son droit de rétractation, compte tenu de la nature des services fournis par la Société, et dans la mesure où l’accès au contenu numérique est autorisé dès l’accord et le règlement du Client.
      
      Durée du contrat et renouvellement
      
      Le contrat est conclu pour une durée déterminée, à savoir :
      
      – mensuelle 
      
      
      Le contrat se renouvellera tacitement, pour des périodes successives de même durée, sauf dénonciation du contrat pour la période en cours, en résiliant son abonnement dans la rubrique “Mon Compte”.
      `},
    {
      title: 'Article 6 – Tarifs et conditions de paiement',
      content: `Tarifs 

      Le prix de vente du Service, conformément aux dispositions du Code de la consommation, est indiqué en CFA, toutes taxes comprises, hors frais éventuels, qui seraient mentionnés avant validation de la commande et facturés en supplément, dans l’onglet « tarifs » prévus à cet effet.
      
      Le tarif de la formule d’abonnement proposée par la Société figure sur le Site, et est portée à la connaissance du Client avant tout engagement. Le montant total dû par le Client est indiqué sur la page de confirmation de commande.
      
      Le prix de vente du Service est celui en vigueur au jour de l’enregistrement de la commande par la Société. Ce tarif est ferme et non révisable pendant leur période de validité correspondant à la durée du contrat, la Société se réservant le droit, hors cette période de validité, de modifier le prix à tout moment. La modification de tarif sera applicable à tous les nouveaux contrats.
      
      Paiement
      
      Le Client souscrit en ligne à l’offre d’abonnement. L’Abonnement est payable comptant, au jour de la commande, puis à chaque renouvellement tacite du contrat, en fonction des différents abonnement proposés sur le Site.
      
      Le paiement se fait par carte bancaire ou prélèvement bancaire automatique ou pas réseau GSM oppérateur MOBILE ou par Perfect Money ou par BITCOIN ou par PAYPAL. Le Client s’engage à approvisionner son compte de paiement pendant toute la durée du contrat. Si le règlement mensuel était annulé ou interrompu, le Client s’engage à régler à la Société le montant du dont il est redevable ainsi que les frais de rejet et de traitement. En cas de modification, le Client s’engage à communiquer ses nouvelles coordonnées de paiement avant la date de prélèvement ou du débit mensuel.
      
      Défaut de paiement
      
      La Société ne sera pas tenue de procéder à la fourniture des prestations de services commandées par le Client si le prix ne lui a pas été préalablement réglé dans les conditions et délais ci-dessus indiqués. Les paiements effectués par le Client ne seront considérés comme définitifs qu’après encaissement effectif des sommes dues à la Société. En outre, la Société se réserve le droit, lorsque le prix convenu n’est pas payé à l’échéance, de suspendre ou de résilier l’exécution de ses obligations.
      `},
    {
      title: 'Article 7 – Obligations du Client liées aux services',
      content: `La Société accorde au Client un droit de consultation, d’utilisation et d’accès aux informations figurant sur le Site. De manière générale, et sans que cette liste puisse être considérée comme exhaustive, le Client s’engage à : 

      – ne télécharger les informations disponibles sur le Site sur son équipement que pour un usage exclusivement personnel, non marchand et limité dans le temps ; n’imprimer les informations téléchargées sur support papier qu’à la condition que les copies ainsi constituées fassent l’objet d’un usage exclusivement personnel, ce qui exclut notamment toute reproduction à des fins professionnelles ou commerciales ou de diffusion en nombre, gratuite ou payante ;
      
      – à ne pas recopier tout ou partie du Site sur un autre site ou un réseau interne d’entreprise ;
      
      – ne pas reproduire ou résumer la version numérique des informations à des fins de revue ou de panorama de presse sauf accord écrit et préalable de la Société ;
      
      – ne pas réaliser une revue ou un panorama de presse à partir des informations ou photographies signalées comme appartenant à un prestataire tiers, ni à réutiliser ces informations pour les proposer sur quelque support que ce soit en dehors du strict cadre légal de la copie privée ;
      
      ne pas reproduire, résumer, altérer, modifier, déplacer, retirer, remplacer ou rediffuser, sans autorisation écrite et préalable de le Société, le contenu éditorial des informations [texte (articles, titre …) et/ou reproduction (illustrations, photos …)] et/ou le nom, le logo, la ou les marque(s) de la Société et/ou des titulaires de droit ;
      
      – à informer la Société dès la connaissance d’un ” piratage ” et en particulier de toute utilisation illicite ou non-contractuelle des informations et ce quel que soit le mode de diffusion utilisé ;
      
      – ne faire aucune utilisation des informations expertes à des fins contraires à l’éthique et a fortiori aux lois applicables ;
      
      – garantir la Société contre tous recours concernant notamment les engagements qui précèdent. 
      
      La violation de ces dispositions impératives soumet le Client ainsi que toutes les personnes qui y ont participé aux sanctions pénales et civiles prévues par la loi.
      
      Dans le cadre de l’utilisation du Site Internet, le Client s’engage à : – déclarer des informations complètes et exactes lors de son utilisation du Site Internet, et à les mettre à jour en cas de changement, – ne pas utiliser le Site Internet à des fins frauduleuses ou non prévues par les présentes conditions générales, – ne pas usurper d’identité ni tenter de se connecter à un compte autre que le sien, – ne pas se livrer à des analyses du système assimilables à du reverse engineering, – ne pas télécharger de virus ou de fichiers potentiellement dangereux pour l’intégrité du Site Internet.
      `},
    {
      title: 'Article 8 – Responsabilité de la société',
      content: `La Société ne donne aucune garantie expresse ou implicite concernant l’exploitation de son site et du contenu proposé. Elle ne peut donner aucune garantie de fiabilité quant à l’ensemble des informations et autres données présentes sur le Site, qu’elles soient fournies par la Société, par ses partenaires ou par tout tiers. En conséquence, toutes les informations et autres données figurant sur le Site sont fournies uniquement à titre d’information.

      La fourniture des informations ne saurait être assimilée, de quelle que façon que ce soit, à un conseil spécifique ou à une instruction à la décision afin d’effectuer une transaction ou de prendre une décision d’investissement. Le Client reconnaît, en conséquence, utiliser les informations et les autres données du Site qui lui sont proposées à ses seuls risques et périls.
      
      La responsabilité de la Société ne peut pas être engagée en cas d’inexécution ou de mauvaise exécution du contrat due, soit au fait du Client, soit au fait insurmontable et imprévisible d’un tiers au contrat, soit à la force majeure.
      
      La Société ne saurait être tenue responsable de l’impossibilité d’accéder au Site en raison de la défaillance de la connexion internet ou du réseau du Client.
      
      La Société ne donne aucune garantie expresse ou implicite concernant l’exploitation de son site et du contenu proposé. L’utilisateur est le seul responsable de ses choix et actions. La Team Parieur se décharge de toutes responsabilités des décisions qui seraient prises par tout client. Les listes de paris sportifs sont à titre indicatif.
      `},
      {
        title: 'Article 9 – Droits de propriété intellectuelle',
        content: `Tous les droits de propriété intellectuelle (tels que notamment droits d’auteur, droits voisins, droits des marques, droits des producteurs de bases de données) portant tant sur la structure, que sur les contenus du Site et des applications développées par la société et notamment les images, sons, vidéos, photographies, logos, marques, éléments graphiques, textuels, visuels, outils, logiciels, documents, données, etc. (ci-après désignés dans leur ensemble « Éléments ») sont la propriété de la société. 

        Ces Éléments sont mis à disposition des Clients pour la seule utilisation des services du Site et dans le cadre d’une utilisation normale de ses fonctionnalités. Les Clients s’engagent à ne modifier en aucune manière ces Éléments.
        
        Toute utilisation non expressément autorisée des éléments du Site et des applications entraîne une violation des droits d’auteur et constitue une contrefaçon. Elle peut aussi entraîner une violation des droits à l’image, droits des personnes ou de tous autres droits et réglementations en vigueur. Elle peut donc engager la responsabilité civile et/ou pénale de son auteur
        
        Il est notamment interdit au Client : – de réaliser des copies du Site et applications ou d’un élément quelconque du Site et applications, – de distribuer à des tiers des copies du Site et applications ou de son contenu, – d’utiliser les spécifications du Site et applications pour créer ou permettre la création d’un programme ayant la même destination, – de modifier, d’altérer, de réviser ou de décompiler le Site à quelle que fin que ce soit, – d’utiliser ses mots de passe et/ou identifiant à des fins autres que leur stricte finalité d’authentification, – de céder, louer, sous-louer ou transférer sa licence d’utilisation à un tiers, – de ne pas respecter les fonctionnalités du Site et applications.
        `},
        {
          title: 'Article 10 : Force majeure',
          content: `L’inexécution de tout ou partie de ses obligations par l’une ou l’autre des parties ne pourra engager sa responsabilité si l’inexécution est due à un événement de force majeure.

          Par dérogation à ce texte et de convention expresse, les événements suivants seront réputés constitutifs de cas de force majeure, indépendamment des critères d’irrésistibilité, d’imprévisibilité et d’extériorité s’ils sont indépendants de la volonté des parties et même s’ils ne sont que partiels :
          
          – interdictions ou restrictions des autorités publiques à la fourniture des services de télécommunications, notamment toute interruption de service expressément demandée par une autorité administrative ou juridictionnelle, 
          
          – arrêt de la fourniture d’énergie, défaillance et/ou interruption des réseaux de transmission y compris de l’accès au réseau internet, 
          
          – panne et/ou sabotage des moyens de télécommunications, actes de piratage informatique, incendie, foudre, inondation et autre catastrophe naturelle, dégât des eaux, intempérie exceptionnelle, avarie, épidémie, émeute, guerre, guerre civile, insurrection, attentat, explosion, acte de vandalisme, 
          
          – grève totale ou partielle, lock-out extérieure à la société.
          
          Ces différents événements constitueront des cas de force majeure qu’ils concernent la société, ses fournisseurs ou prestataires.
          
          Le cas de force majeure suspend les obligations à la charge de la société, pendant la durée des événements de force majeure. Néanmoins, si les conséquences de la force majeure duraient plus de 30 jours consécutifs, chacune des parties pourra mettre fin de plein droit au contrat en notifiant cette décision par tout moyen écrit à l’autre partie, en visant les stipulations du présent article, sans que cette résiliation n’ouvre droit à l’obtention d’une quelconque indemnité. La résiliation prendra effet dès réception de la notification.
          `},
          {
            title: 'Article 11 – Nullité',
            content: `La présente convention est régie par le droit Français.  En cas de conflit entre les parties, celles-ci s’engagent à rechercher prioritairement une solution amiable.  Toute contestation ou litige pouvant résulter de l’interprétation et/ou de l’exécution des présentes conditions générales relèvera de la compétence exclusive des juridictions en France.
            `},
            {
              title: 'Contacts',
              content: `Les Utilisateurs sont invités à adresser leurs questions et réclamation par email à l’adresse : contact@lecaxiscle.com`}
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.accordionContainer}>
        {sections.map((section, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.titleContainer}
              onPress={() => setActiveSection(index)}
            >
              <Text style={styles.title}>{section.title}</Text>
            </TouchableOpacity>
            {activeSection === index && (
              <View style={styles.contentContainer}>
                <Text style={styles.content}>{section.content}</Text>
                <Image style={styles.sectionImage} source={{ uri: section.image }} />
              </View>
            )}
          </View>
        ))}
      </View>
      </ScrollView>
  );

}

export default ConditionVente

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  accordionContainer: {
    margin: 10,
    marginTop: 60,
  },
  titleContainer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
  },
  sectionImage: {
    marginTop: 20,
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
});

