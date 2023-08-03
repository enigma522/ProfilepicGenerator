'use client'
import { useParams } from "next/navigation"
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';
import * as personas from '@dicebear/personas';
import { useRouter } from "next/router";




function generateAvatar(seed: string){
    /*const avatar = createAvatar(style as any, {
      seed: seed, // Use the search query as the seed
    });
   return avatar;*/
    
};

function Generate() {
    const {search} = useParams();

    //const m=generateAvatar(search[0] as string);
  return (
    /*<div dangerouslySetInnerHTML={{__html:m}} className="svg"></div>*/

    <img src={'https://api.dicebear.com/6.x/lorelei/svg?seed='+search} alt="" className="svg"/>

  )
}

export default Generate