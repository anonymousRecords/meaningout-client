import styled from 'styled-components';
import MakeHeader from '../components/MakePage/MakeHeader';
import InputBox from '../components/MakePage/InputBox';

const StyledMake = styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    .title{
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    .explanation {
        font-size: 16px;
        color: #707070;
    }

    .make-container {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .make-text {
        margin-bottom: 18px;
    }

    .next-btn {
        width: 334px;
        height: 48px;
        border-radius: 8px;
        border: 0;
        background-color: #2294FF;
        font-size: 16px;
        color: white;
        cursor: pointer;
        margin-top: 50px;
    }
`

const MakePage = () => {
    return (
        <StyledMake> 
            <MakeHeader/>
            <div className='make-container'>
                <div className='make-text'>
                    <div className='title'>선한 가게를 소개해 주세요</div>
                    <div className='explanation'>당신이 이용한 선한 가게<br/>더 많은 사람이 이용할 수 있도록 소개해 주세요</div>
                </div>
                <InputBox/>            
            </div>
            <button className='next-btn'>
                다음으로
            </button>
        </StyledMake>
    );
}

export default MakePage;