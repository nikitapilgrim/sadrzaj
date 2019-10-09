import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const Text = styled.p`
  color: #FFF;

`

export const Zdravo = () => {
  return (
    <Wrapper>
      <Title>Zdravo!</Title>
      <Text>
        Ovo je tvoja digitalna čitanka za 8. razred osnovne škole.
        Riješi sve zadatke i zaradi diplomu!
        Sada ćemo ti pokazati kako ova digitalna čitanka funkcioniše.
      </Text>
    </Wrapper>
  )
};
export const Sadrzaj = () => {
  return (
    <Wrapper>
      <Title>Sadržaj</Title>
      <Text>
        Ovdje je sadržaj ove čitanke. Klikni ovdje i imaš pristup svakom tekstu. Takođe možeš uključiti i isključiti muziku.
      </Text>
    </Wrapper>
  )
};

export const Znanje = () => {
  return (
    <Wrapper>
      <Title>Provjeri znanje</Title>
      <Text>
        Kada pročitaš tekst, možeš provjeriti znanje. Trebaš savladati svaki test da bi na kraju dobio/la diplomu.
      </Text>
    </Wrapper>
  )
};

export const ZnanjeNext = () => {
  return (
    <Wrapper>
      <Title>Provjeri znanje</Title>
      <Text>
        Kada pročitaš tekst, možeš provjeriti znanje. Trebaš savladati svaki test da bi na kraju dobio/la diplomu.
        Kada savladaš test, dobićeš medalju. Kada savladaš svaki zadatak u testu, dobićeš 100%. Da bi zaradio/la diplomu, moraš imati svuda 100%.
      </Text>
    </Wrapper>
  )
};

export const Poslusaj = () => {
  return (
    <Wrapper>
      <Title>Poslušaj / Pregledaj</Title>
      <Text>
        Ponekad možeš preslušati zvučni materijal ili pogledati video klipove koji će ti pomoći da savladaš zadatke.
      </Text>
    </Wrapper>
  )
};

