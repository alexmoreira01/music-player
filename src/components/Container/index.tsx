import { Buttons, DivContainer, MusicPlayerOne, MusicPlayerThree, MusicPlayerTwo, Title } from "./styles";
import { Rewind, Play, FastForward } from 'phosphor-react';

import ImagePlayer from '../../assets/img-player.svg';


export function Container() {
    return(
        <DivContainer>

            <MusicPlayerOne>

                <img src={ImagePlayer} width="189.66px" height="189.66px" alt="" />
                
                <Title>
                    <h1>Acorda Devinho</h1>
                    <span>Banda Rocketseat</span>
                </Title>

                <Buttons>
                    <Rewind size={32} weight="fill" />
                    <Play size={32} color="#E1E1E6" weight="fill" />
                    <FastForward size={32} weight="fill" />
                </Buttons>

                <div>

                </div>
                

            </MusicPlayerOne>

            <div>
                <MusicPlayerTwo>
                    <img src={ImagePlayer} width="84.03px" height="84.03px" alt="" />

                </MusicPlayerTwo>

                <MusicPlayerThree>
                    <img src={ImagePlayer} width="84.03px" height="84.03px" alt="" />


                </MusicPlayerThree>
            </div>

        </DivContainer>
    )
}