// Code-native showcase: source pixels are clipped only at reviewed block boundaries.
export function createCaseBoard(data,language='ru'){
 const index=language==='en'?1:0,board=document.createElement('section');board.className='case-board';board.dataset.boardId=data.id;
 const name=Array.isArray(data.title)?data.title[index]:data.title;
 const isShowcase=Boolean(data.kind),labels=data.kind==='presentation'?['Презентация','Presentation']:data.kind==='logo'?['Логотип','Logo']:['Фирменный стиль','Visual identity'];
 board.setAttribute('aria-label',(index?'Portfolio case: ':'Кейс портфолио: ')+name);
 if(isShowcase){board.classList.add('case-board--showcase','case-board--'+data.kind);}
 if(data.preformatted){const img=document.createElement('img');img.src='/harlampiy-studio/assets/'+data.source;img.alt=name+' — '+(index?'complete supplied case board':'полный присланный кейс');img.width=data.width;img.height=data.height;img.decoding='async';board.classList.add('case-board--supplied');board.append(img);return board;}
 const palette=data.palette||{};
 for(const key of ['base','start','end','ink'])if(/^#[0-9a-f]{6}$/i.test(palette[key]||''))board.style.setProperty('--board-'+key,palette[key]);
 const corner=document.createElement('div');corner.className='case-board-corner';
 const chips=isShowcase?(index?['portfolio',data.kind==='presentation'?'presentation design':data.kind==='logo'?'logo design':'visual identity']:['портфолио',data.kind==='presentation'?'дизайн презентаций':data.kind==='logo'?'дизайн логотипа':'фирменный стиль']):(index?['2025','web design']:['2025','веб-дизайн']);
 for(const text of chips){const chip=document.createElement('span');chip.textContent=text;corner.append(chip);}
 const header=document.createElement('header');header.className='case-board-header';
 const title=document.createElement('h3');title.className='case-board-title';title.setAttribute('aria-label',isShowcase?labels[index]:(index?'Website':'Сайт'));
 const heading=isShowcase?labels[index]:(index?'Website':'Сайт');
 const initial=document.createElement('span');initial.className='case-board-initial';initial.textContent=isShowcase?heading[0]:(index?'W':'C');initial.setAttribute('aria-hidden','true');
 const rest=document.createElement('span');rest.textContent=heading.slice(1);rest.setAttribute('aria-hidden','true');title.append(initial,rest);
 const nameLine=document.createElement('p');nameLine.className='case-board-name';nameLine.textContent=name;
 const kind=document.createElement('p');kind.className='case-board-kind';kind.textContent=data.type[index];header.append(title,nameLine,kind);
 if(isShowcase){
  const artwork=document.createElement('div');artwork.className='case-board-artwork';
  const img=document.createElement('img');img.src='/harlampiy-studio/assets/'+data.source;img.alt=name+' — '+(data.reconstructed?(index?'reconstructed straight slide grid':'восстановленная ровная сетка слайдов'):(index?'complete supplied artwork':'полный присланный макет'));img.width=data.width;img.height=data.height;img.decoding='async';
  artwork.append(img);board.append(corner,header,artwork);return board;
 }
 const columns=document.createElement('div');columns.className='case-board-columns';columns.style.setProperty('--column-first',(data.height-data.split)+'fr');columns.style.setProperty('--column-second',data.split+'fr');
 for(const [part,start,height]of [[1,0,data.split],[2,data.split,data.height-data.split]]){
  const frame=document.createElement('div');frame.className='case-board-column';frame.dataset.part=String(part);frame.style.aspectRatio=data.width+'/'+height;
  const img=document.createElement('img');img.src='/harlampiy-studio/assets/'+data.source;img.alt=name+' — '+(index?'part ':'часть ')+part;img.width=data.width;img.height=data.height;img.decoding='async';
  if(start)img.style.transform='translateY(-'+(start/data.height*100)+'%)';
  frame.append(img);columns.append(frame);
 }
 board.append(corner,header,columns);return board;
}
