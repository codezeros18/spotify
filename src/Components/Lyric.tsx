import React from 'react';
import { useLocation } from 'react-router-dom';

const Lyric: React.FC = () => {
  const location = useLocation();

  // Map of page paths to lyrics
  const lyricsMap: { [key: string]: string } = {
    '/note1': 'tau ga si kalo lo tempat ternyaman gw, setiap sama lo gw bisa ngeluarin unek unek or sisi kecil gw yang kek bocil and i love it so much so dont go anywhere okay :(',
    '/note2': 'pls ni lagu cocok bgt buat lo kek this song remind me of u fun fact pas kita di euphoria when i look at u , ni lagu langsung main di kepala gw kek omg i think im in love w u tapi belom berani confess aja bcs takut pertemanan kt hancur hehe',
    '/note3': 'idk, kadang gw benci bgt this side of bucin gila kek im so in love w u ga terima lo kalo bukan pacar kek i wanna be w u all the time baby, i dont think i could live without u if u do id prob die',
    '/note4': 'FUN FACT THIS IS ONE OF MY TOP SONG, ni lagu lucu bgt kek fak lah kek i wanna do things kek nyoba hal baru with u sama kamu semua, from nyoba kafe or nyoba hal lain harus sama kamu terus :) aku grateful bgt that ur mine',
    '/note5': 'this song cocok bgt buat everytime kt ke alfa x bcs kek tuh tempat kek anthem place buat kt bcs kemana mana selalu kesitu and gw pergi kesitu kalo sama lo doang gw suka bgt sama diri gw sendiri kemana pun itu kalo sama lo :)',
    '/note6': 'sorry banget ya kalo gw bubrut dah ga tahan lagi, bcs yang gw mau lakuin is to make u happy all the time gamau kamu kenapa napa kamu kamu ovt or overcome by something so what i hve to do is to be there to make sure ur okay :)',
    '/note7': 'lagu ini muncul pas aku konfes di maxima kek gw ga peduli sama orang sekitar yang gw pengen lakuin cuman nyatain perasaan gw ke elo, that i like u a lot nanda :)',
    '/note8': 'suka bgt sama lagu hivi sejak konser euphroia bcs yang gw pikirin cuman lo doang pas lagu hivi dinyanyiin kek kita teriak teriak terus nyanyiin lagu hivi i miss those memories w u babe :)',
  };

  // Get the current lyric based on the path, default to '/note1' lyric if path doesn't match
  const currentLyric = lyricsMap[location.pathname] || lyricsMap['/note1'];

  return (
    <div className="m-6">
      <div className="bg-backgrey2 rounded-lg">
        <div className="p-4">
          <h2 className="text-[16px] font-[600] text-white pb-8">Lyrics</h2>
          <p className="text-[24px]">{currentLyric}</p>
        </div>
      </div>
    </div>
  );
};

export default Lyric;
