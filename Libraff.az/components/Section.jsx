import React from 'react'
import { useParams } from 'react-router-dom'

const Section = () => {
  const { cat, id } = useParams()
  const data = [
    {
      name: 'Kitab',
      altCat: [
        { name: 'Fikir', altCat: ['Felsefe', 'Psikoloji', 'Sosiologiya', 'Etika', 'Metafizika', 'Epistemologiya'] },
        { name: 'Hikaye', altCat: ['Roman', 'Masal', 'Qisa Hekayələr', 'Əfsanələr', 'Nağıl', 'Detektiv'] },
        { name: 'Siyaset', altCat: ['Siyaset', 'Geosiyasət', 'Demokratiya', 'İdeologiyalar', 'Siyasi nəzəriyyələr', 'Seçki'] },
        { name: 'Tarih', altCat: ['Tarih', 'Antik Çağ', 'Orta Çağ', 'Müasir dövr', 'Azərbaycan tarixi', 'İslam tarixi'] },
        { name: 'Bilim', altCat: ['Bilim', 'Fizika', 'Kimya', 'Biologiya', 'Astronomiya', 'Riyaziyyat'] },
        { name: 'Edebiyat', altCat: ['Edebiyat', 'Şeir', 'Dram', 'Satira', 'Nəsr', 'Poema'] }
      ]
    },
    {
      name: 'Bədii ədəbiyyat',
      altCat: [
        'Roman', 'Hikaye', 'Novel', 'Povest', 'Epopeya', 'Bəstək',
        'Uşaq', 'Gənclər', 'Klassiklər', 'Klassik poemalar',
        'Esse', 'Drama', 'Fantastika', 'Detektiv', 'Macəra', 'Tarixi roman'
      ]
    },
    {
      name: 'Qeyri-bədii ədəbiyyat',
      altCat: [
        'Bioqrafiya', 'Tarixi əsərlər', 'Elmi-populyar', 'Siyasi ədəbiyyat',
        'Psixologiya', 'İqtisadiyyat', 'Sosiologiya', 'Fəlsəfə', 'Araşdırma', 'Motivasiya'
      ]
    },
    {
      name: 'Elektronika & aksessuar',
      altCat: [
        {
          name: 'Elektronika',
          altCat: ['Telefon', 'Komputer', 'Televizor', 'Planşet', 'Kamera', 'Monitor', 'Smart saat', 'Printer']
        },
        {
          name: 'Aksessuar',
          altCat: ['Qulaqlıq', 'Şarj cihazı', 'Qoruyucu', 'USB', 'Kabellər', 'Adapter', 'Mouse', 'Klavye']
        }
      ]
    },
    {
      name: 'Oyuncaqlar & Oyunlar',
      altCat: [
        {
          name: 'Oyuncaqlar',
          altCat: ['Qadınlar', 'Qızlar', 'Uşaqlar', 'Əyləncə', 'Lego', 'Plastik oyuncaq', 'Təhsil oyuncaqları', 'Peluşlar']
        },
        {
          name: 'Oyunlar',
          altCat: ['Kompyuter', 'Konsol', 'Mobil', 'Cədvəl oyunları', 'Bulmacalar', 'Karta oyunları', 'Strategiya', 'VR oyunları']
        }
      ]
    },
    {
      name: 'Dəftərxana',
      altCat: [
        {
          name: 'Dəftərxana',
          altCat: ['Qələm', 'Silgi', 'Dəftər', 'Xəritə', 'Pozan', 'Kağız', 'Qələmqabı', 'Lenta']
        },
        {
          name: 'Dəftərxana',
          altCat: ['Qovluq', 'Marker', 'Əlyazma kağızı', 'Stepler', 'Skotç', 'Qayçı', 'Cızıcı', 'Not kağızı']
        }
      ]
    },
    {
      name: 'Hədiyyələr & Hobbi',
      altCat: [
        {
          name: 'Hədiyyələr',
          altCat: ['Hədiyye', 'Hədiyyə', 'Qablaşdırma', 'Açıqcalar', 'Bəzək əşyaları', 'Dekor', 'Təqvim', 'Əl işi hədiyyə']
        },
        {
          name: 'Hobbi',
          altCat: ['Rəsm', 'Əl işləri', 'Musiqi alətləri', 'Maşın modelləri', 'Tikmə', 'Yapışqan sənətləri', 'Modelçilik', 'Fotoqrafiya']
        }
      ]
    }
  ]
  return (
    <div>
      <h1>Section Component</h1>
      <article>Category: {cat ? cat : 'None'}
        <ul className='pt-5  flex flex-col gap-1 w-1/4 '>
          {data.map((item, index) => (
            <li key={item.name + index} onMouseOver={() => showAlt(index)} >
              <Link to={`/kitab/${item.name}`} className='flex  justify-between transition-all text-[13px] font-light group py-1 px-3 items-center hover:bg-gray-200'> {item.name}<IoIosArrowForward className='group-hover:text-red-600 text-[14px] text-[#9C9C9C]' /></Link>
            </li>
          ))}
        </ul>
      </article>
      <p>ID: {id ? id : 'None'}</p>
    </div>
  )
}

export default Section
