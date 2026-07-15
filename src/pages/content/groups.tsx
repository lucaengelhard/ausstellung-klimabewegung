import React from "react";
import { Chapter, Paragraph, Quote } from "../../components/Typography";
import { Group } from "../../components/Group";

import NatureFriendsLogo from "../../images/groups/Naturefriends.svg";
import DerNaturfreund from "../../images/groups/1928_Der Naturfreund.jpg";

import Greenpeace from "../../images/groups/1979_Greenpeace_Rainbow Warrior.jpg";
import GreenpeaceLogo from "../../images/groups/Greenpeace_logo.svg";

export function Groups() {
  return (
    <>
      <Chapter title="Zurückblicken, um nach vorne zu blicken">
        Der Blick in die Vergangenheit ist von unserem Standpunkt aus bequem:
        Wir wissen, wie die Geschichte weiterging. Das konnten die
        Zeitgenoss:innen aber höchstens erahnen. Wir wollen versuchen, uns in
        sie hineinzuversetzen und sie zu verstehen. Dabei zeigen wir mehrere
        zentrale Punkte in der Geschichte. Der Fokus liegt dabei auf
        Deutschland. Auch, wenn die härtesten Auseinandersetzungen nicht im
        imperialistischen Zentrum stattfnden. Sondern dort, wo Extremwetter,
        Meeresspiegelanstieg und kapitalistische Ausbeutung das Überleben am
        meisten gefährden.Chronologien sind gefährlich. Denn sie geben eine
        lineare Entwicklung vor, wo es keine gibt. Sie verstecken
        Gleichzeitigkeiten und Widersprüche. Trotzdem können sie sichtbar
        machen, auf welche Erfahrungen wir bereits zurückgreifen können.
      </Chapter>
      <Group
        name="Organisation der Arbeiter:innenbewegung: die Naturfreunde"
        logo={NatureFriendsLogo}
        images={[DerNaturfreund]}
      >
        In den 1890er Jahren - 20 Jahre nach der Gründung des deutschen
        Kaiserreichs - zu Hochzeiten von Industrialisierung und Kolonialismus
        gründen sich die Naturfreunde. Erste Naturfreundehäuser entstehen, um
        auch Arbeiter:innen zu ermöglichen, Freizeitausfüge in die Natur zu
        unternehmen. Die Naturfreunde sind damit Teil der (sozialistischen)
        Arbeiter:innenbewegung. Europaweit besteht heute ein Netz aus mehr als
        700 Naturfreundehäusern. Mit 350.000 Einzelmitgliedern gehören die
        Naturfreunde zu den weltweit größten NGOs.
      </Group>
      <Group
        name="Greenpeace: Für Frieden in Vietnam und gegen Atomwafen"
        logo={GreenpeaceLogo}
        images={[Greenpeace]}
      >
        <Paragraph>
          Im gesellschaftlichen Klima der 1968er-Bewegung und spätestens nach
          dem Mord an Benno Ohnesorg durch einen deutschen Polizisten geht es
          umfassender um Veränderung. Es geht um ein Aufräumen mit ehemaligen
          NS-Funktionären, um sexuelle Freiheit und: Um den Vietnamkrieg und den
          Einsatz des Entlaubungsmittels Agent Orange. Aus dieser Bewegung
          heraus gründen US-amerikanische Aktivist:innen 1971 die Organisation
          Greenpeace.
        </Paragraph>
        <Paragraph>
          Bekannt wird sie durch eine spektakuläre Aktion gegen Atomwaffentests
          auf dem Meer. Heute ist Greenpeace in über 55 Staaten vertreten und
          hat weltweit 3,5 Millionen Fördermitglieder.
        </Paragraph>
      </Group>
      <Chapter>
        Die Proteste von Memphis werden oft als Sternstunde der
        Umweltgerechtigkeitsbewegung verstanden: Einer Bewegung, die die
        sozialen Aspekte der ökologischen Krise in den Vordergrund rückt. Die
        Umweltgerechtigkeitsbewegung grenzt sich bewusst von der bis dato
        überweigend weißen Umweltbewegung ab, die sich in vielen Fällen darauf
        beschränkt, die Umweltverschmutzung in den eigenen, wohlhabenden
        Communities zu bekämpfen. Das führt aber dazu, dass viele der Probleme
        einfach in ärmere Gegenden ausgelagert werden. Weiße
        Umweltorganisationen wie der Sierra Club setzen sich beispielweise mit
        viel Engagement für die Errichtung von Nationalparks ein, billigen dabei
        aber wissentlich die Vertreibung und Enteignung der dort lebenden
        Indigenen Menschen. Die USA und Deutschland sind natürlich nicht die
        einzigen Orte mit Umweltprotesten - im Gegenteil. Deshalb richten wir
        nun den Blick auf Brasilien, Nigeria und Mexiko.
      </Chapter>
      <Quote description="Chico Mendes">
        Ökologie ohne Klassenkampf ist nur Gärtnerei
      </Quote>
    </>
  );
}
