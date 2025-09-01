import './DiaryItem.css'
import { getEmotionImage } from '../util/get-emotion-image.js';
import Button from './Button.jsx';

const DiaryItem = () => {

  const emotionId = 1;

  return (
    <div className='DiaryItem'>
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(1)}/>
      </div>
      <div className='info_section'>
        <div className='created_date'>
          {new Date().toLocaleDateString()}
        </div>
        <div className='content'>
          일기 컨텐츠
        </div>
      </div>
      <div className='button_section'>
        <Button text={'수정하기'} />
      </div>
    </div>
  );
}

export default DiaryItem;