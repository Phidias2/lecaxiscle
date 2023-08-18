import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
const PolitiqueDeConfidentialite = () => {
  const [activeSection, setActiveSection] = useState(null);

  const intro = `Chez LECAXISCLE, nous traitons les données personnelles concernant nos clients. Nous nous employons à traiter vos données personnelles avec le plus grand soin, à assurer leur sécurité et à respecter le droit de la protection des données.

    Lecaxiscle ne collecte pas de données personnelles relatives aux personnes âgées de moins de 18 ans. Si des données personnelles concernant des mineurs sont collectées à notre insu, veuillez nous contacter à l’adresse contact@lecaxiscle.com
    
    Fonctionnement de cette Politique
    
    Le but de cette Politique est d’expliquer, quand, pourquoi et comment nous traitons les données pouvant vous concerner (« données personnelles »). Elle contient également d’importantes informations quant à vos droits légaux. Cette Politique n’a pas pour but de supplanter les termes contractuels de tout contrat que vous auriez conclu avec nous, ni les droits que vous offrent les lois sur la protection des données.
    `
  const sections = [
    {
      title: '1 – Qui est responsable de la supervision de vos données personnelles ?',
      content: 'MOCHAHOST est principalement responsable de la surveillance de vos données personnelles (votre Responsable du Traitement). Le terme « Responsable du Traitement » désigne la société qui définit les moyens et les objectifs relatifs au traitement des données personnelles. Il convient que vous sachiez que, bien que nous soyons principalement responsables du traitement de vos données personnelles, il est possible que des données se trouvent dans des bases de données auxquelles d’autres sociétés ont accès. Lorsqu’elles accèdent à vos données personnelles, toutes les sociétés respecteront les normes énoncées dans cette Politique.        ',
    },

    {
      title: '2 – Quelles données personnelles traitons-nous ?',
      content: 'Nous pouvons être amenés à traiter les données suivantes vous concernant : Nom Prénom Adresse email Numéro de téléphone Informations pour paiements, carte de paiement, les nom et adresse de votre banque ou fournisseur de services paiements MOBILE Pays de résidence Mot de passe',
    },
    {
      title: '3 – A quelles fins utilisons-nous vos données personnelles et quand effectuons-nous le traitement ?        ',
      content: 'Lecaxiscle collecte les données directement auprès de vous lorsque vous utilisez nos services ou que vous vous rendez sur nos sites internet. Nous utilisons vos données personnelles afin de: vous envoyer des emails promotionnels en lien avec nos produits et services. administrer la facturation, traitement des paiements, remboursements et conformité fiscale – en collaboration avec des banques et fournisseurs de services pour transactions bancaires ou d’autres moyens de paiement GSM. pour communiquer avec vous sur ces sujets, y compris recouvrement de créances. pour prévenir, détecter ou traiter des activités illégales ou présumées illégales notamment les fraudes liées aux paiements. analyser les informations dans nos systèmes et bases de données afin d’améliorer la façon dont nous conduisons nos affaires et opérons nos sites internet conformément aux préférences utilisateur en vue de fournir une meilleure expérience et un meilleur service à nos utilisateurs. améliorer et cibler les publicités que vous recevez de notre part. remplir ou exercer nos droits et obligations légaux. Nous ne traiterons vos données personnelles qu’aux fins énoncées ci-dessus et lorsque nous sommes certains que : vous nous avez donné votre consentement à l’utilisation de vos données de cette façon, ou notre utilisation de vos données personnelles est nécessaire afin de soutenir nos « intérêts légitimes » en tant qu’entreprise (par exemple, l’amélioration de nos produits ou l’analyse de nos ensembles de données), de façon proportionnée et tout en respectant votre vie privée, ou nécessaire pour exécuter un contrat avec vous, par exemple vous fournir des services et administrer leur paiement.',
    },
    {
      title: '4 – Avec qui partageons-nous vos données personnelles?',
      content: 'Nous travaillons avec de nombreux tiers, afin de nous aider à gérer nos affaires et fournir nos services. Ces tiers peuvent, de temps à autre, avoir besoin d’accéder à vos données personnelles Notre fournisseur d’application de courrier électronique, qui est doté d’une certification Privacy Shield et traite des données personnelles pour notre compte ; Notre fournisseur de plugin et hébergeur de WordPress.com, Symbioz … Des banques et fournisseurs de services pour transactions bancaires ou d’autres moyens de paiement GSM. Des prestataires de services ou sous-traitants chargés du traitement de vos données personnelles selon nos instructions. Si nous avons une obligation de divulgation afin de respecter une obligation légale ou de protéger nos intérêts ou notre sécurité. Au cas où nous vendrions, achèterions ou réorganiserions toute entreprise ou des actifs ou si nos actifs sont achetés par un tiers, y compris vendeurs ou acheteurs potentiels. ',
    },
    {
      title: '5 - Marketing direct',
      content: 'Nous nous servirons de vos données personnelles pour vous envoyer des communications de marketing direct concernant les produits et services que nous et nos partenaires offrons. Dans certains cas, le traitement de vos données personnelles à des fins de marketing sera fondé sur nos intérêts légitimes. Lorsque la loi l’impose, il sera fondé sur votre consentement. Vous aurez toujours le droit de refuser le marketing direct, à tout moment. Vous pouvez vous servir du lien de désinscription se trouvant dans toutes les communications de marketing direct, ou en nous contactant. Nous prenons des mesures visant à limiter le marketing direct pour qu’il soit maintenu à un niveau raisonnable et proportionné, et à vous envoyer des communications dont nous pensons qu’elles peuvent vous intéresser ou vous concerner sur la base des informations vous concernant à notre disposition.',
      image: 'https://www.bootdey.com/image/500x500/008B8B/000000'
    },
    {

      title: '6 – Pendant combien de temps conservons-nous vos données personnelles ?',
      content: 'Nous conserverons vos données personnelles aussi longtemps que cela est raisonnablement nécessaire. Dans certaines circonstances, nous conservons vos données personnelles pendant un certain temps afin de respecter des obligations légales, fiscales ou comptables, par exemple. Nous avons des règles de conservation des données pour les données personnelles que nous traitons. Lorsque vos données personnelles ne seront plus nécessaires, nous nous assurerons qu’elles sont supprimées de façon sécurisée ou anonymisées.Afin d’exercer vos droits, vous pouvez prendre contact avec nous en envoyant un email à contact@lecaxiscle.com . Veuillez noter les éléments suivants si vous souhaitez exercer vos droits ',
    },
    {

      title: '7 – Quels sont vos droits ?',
      content: `Vous disposez d’un certain nombre de droits en lien avec vos données personnelles. Vous trouverez plus d’informations concernant chacun de ces droits dans le tableau ci-dessous.
        Droit	Signification
Accès	Vous pouvez nous demander de :
confirmer si nous traitons vos données personnelles ou non;
vous fournir une copie de ces données;
vous fournir d’autres informations concernant vos données personnelles, par exemple quelles données nous détenons, à quelles fins nous les utilisons, à qui nous les divulguons, si nous les transférons et comment nous les protégeons, combien de temps nous les conservons, quels sont vos droits, comment vous pouvez déposer une plainte, la source d’obtention de vos données personnelles et savoir si nous avons réalisé une Prise de Décision Automatique ou du Profilage, dans la mesure où ces informations ne sont pas déjà à votre disposition par le biais de cette Politique.
Rectification	Vous pouvez nous demander de rectifier les données personnelles incorrectes vous concernant.
Il se peut que nous demandions à vérifier l’exactitude des données avant de procéder à la rectification.
Suppression	Vous pouvez nous demander de supprimer vos données personnelles, mais uniquement lorsque:
elles ne sont plus nécessaires pour remplir les objectifs aux fins desquels elles avaient été collectées; ou
vous avez retiré votre consentement (dans le cas d’un traitement fondé sur le consentement); ou
suite à un droit d’opposition réussi (voir « Opposition » ci-dessous); or
elles ont été traitées illégalement; ou
afin de respecter une obligation légale.
Nous n’avons pas l’obligation d’accéder à une demande de votre part de suppression de vos données si le traitement de ces données est nécessaire:

afin de respecter une obligation légale; ou
pour l’établissement, l’exercice ou la défense de recours juridiques;
Il existe d’autres circonstances dans lesquelles nous ne sommes pas obligés d’accéder à votre demande de suppression, bien que les deux circonstances ci-dessus soient les plus probables pour un rejet de votre demande.

Restriction	Vous pouvez nous demander de restreindre l’emploi (c’est-à-dire de conserver, mais pas d’utiliser) de vos données personnelles, mais uniquement lorsque:
leur précision est contestée (voir Rectification), afin de nous permettre de vérifier celle-ci; ou
leur traitement est illégal, mais vous ne voulez pas les supprimer; ou
elles ne sont plus nécessaires pour remplir les objectifs aux fins desquels elles avaient été collectées, mais nous avons toujours besoin d’établir, d’exercer ou de défendre des recours juridiques; ou
vous avez exercé votre droit d’opposition et la vérification des motifs impérieux est en cours.
Nous pourrons continuer d’utiliser vos données personnelles suite à une demande de restriction, lorsque:

vous nous avez donné votre consentement; ou
pour l’établissement, l’exercice ou la défense de recours juridiques; ou
afin de protéger les droits d’une autre personne physique ou morale.
Portabilité	Vous pouvez nous demander de vous fournir vos données personnelles de façon structurée dans un format couramment utilisé, lisible par machine, ou vous pouvez demander qu’elles soient « portées » vers un autre Responsable du Traitement, mais dans chaque cas, seulement si:
le traitement est fondé sur votre consentement ou l’exécution d’un contrat avec vous ; et
le traitement est réalisé de façon automatique.
Opposition	Vous pouvez vous opposer au traitement de vos données personnelles lorsque celui-ci est fondé sur nos « intérêts légitimes », si vous considérez que vos droits et libertés fondamentaux sont supérieurs à nos intérêts légitimes.
Nous aurons l’occasion de démontrer que nous avons des intérêts légitimes substantiels qui surpassent vos droits et libertés.
Autorité de contrôle	Vous avez le droit de déposer une plainte auprès de l’autorité de contrôle locale eu égard à notre traitement de vos données personnelles.
Nous vous demandons de bien vouloir tenter de régler tout problème auprès de nous en premier lieu, bien que vous ayez le droit de contacter votre autorité de contrôle à tout moment.
        `
      ,
    }
  ];


  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{intro}</Text>
      </View>
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
    </View>
  );

}
export default PolitiqueDeConfidentialite
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

