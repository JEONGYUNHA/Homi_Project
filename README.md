# HOKAY MIRROR (Homi)

### 개요

*거울의 특성을 살리면서 편리함을 극대화한 스마트 미러*

<img src="https://lh4.googleusercontent.com/NYsAMLwIbbqLxkt9tNcKrf1u7UZJ8mPT2fWRMX7qMIeeKS_En6ht9Yzn2FhwEGDzG7Ed29pbwt0l4DhjT2zCCy2PdZagrHD1N-0tS8q5Zxs8HwarzJl5_OXHgs4K8Y24irKV402h" alt="img" style="zoom:80%;" />
<br/>


사람들은 외출 전 여러 번 옷을 갈아 입어보고도 결국 같은 옷을 입고 외출하곤 합니다. 

또한 외출 전 기온과 날씨를 따로 검색하여 그에 맞는 복장을 고르는데, 평소에 이런 부분에 대한 불편함을 느꼈고, 이를 보안할 방법이 무엇이 있을까 생각해보다 **구글 어시스턴트**와 연동한 ***스마트 미러***를 생각하게 되었습니다. 

**Hokay Mirror**는 구글 어시스턴트와 연동되어 음성 명령을 통해 **사진 촬영, 검색, 캘린더 기능**을 수행합니다.

Hokay Mirror는 기존에 있던 스마트 미러에 카메라를 설치하여 현재 입은 옷을 촬영 및 저장할 수 있습니다. 

저장된 사진에 그날의 **날짜와 날씨, 온도 등**이 함께 저장되어 이를 음성 명령을 통해 검색할 수 있으며, 검색 조건에 맞는 사진들이 스마트 미러에 나타납니다. 

이러한 기능들을 통해 우리는 외출 준비를 할 때 날씨를 찾아보거나 앨범을 찾아보는 등의 번거로운 일을 하지 않아도 됩니다.  

<br/>

> Hokay Mirror (Home Okay Mirror)
>
> Home + Okay Google + Mirror

<br/><br/>

### 주요 기능

- **음성 인식 기능**
  - 모든 기능은 음성 명령을 통해 실행
- **웹캠을 연결하여 그날 그날의 복장 촬영**
  - 날짜, 날씨, 기온 정보와 함께 저장
- **정보로 사진 검색**
  - ex) 지난주에 입은 옷 보여줘
  - ex) 비 오는 날 입은 옷 보여줘
- **캘린더 기능(부가 정보 입력)**
  - 결혼식 간 날 복장
<br/><br/><br/>


### 기대 효과

|              As is              |                            To be                             |
| :-----------------------------: | :----------------------------------------------------------: |
| 옷을 고를 때 많은 시간이 걸린다 |              여러 옷을 한번에 비교해 볼 수 있다              |
|  옷을 여러 번 갈아입어야 한다   | 기온, 날씨 등에 따라 검색이 가능하여 <br />복장 선택에 용이하다 |
|    날씨를 따로 찾아봐야 한다    |      날씨를 따로 찾아볼 필요 없이 바로 확인이 가능하다       |

<br/>

**기존 스마트미러와 차별화된 기능**

- 날짜, 날씨, 기온 별로 사진 검색이 가능하다
  - 복장 선택 시간의 단축
- 구글 캘린더 연동
  - 메모와 함께 복장을 확인할 수 있다

<br/>

**상업적인 활용**

- 휘트니스 센터
- 안경점
- 의류 매장

<br/>



### 설계 이미지 및 적용 기술

<img src="https://lh6.googleusercontent.com/hRvJVzXeTuRkuNSDWvF4-E3eGuuk2VW8QTLYI1bbRSVIJWhr8F3JMZxj9m_7AisUZFjQGCE0mRmaqdBTBtzhPCAr8JVXsdEmltsnQ5mHti_jS9PLLUOHzdezFOWE63f8mhJsIH7G" alt="img" style="zoom:80%;" />

- Raspbian / RaspberryPI, PiCamera
- node.js, webstorm
- Java, Python
- JavaScript, HTML5, CSS
- MySQL
- Google Assistant, Google Speech API(STT), Responsive Voice API (TTS)


<br/>


### 사용 시나리오

<img src="https://lh4.googleusercontent.com/lc_J_mhZ4nEfJpkCV7oXzvmjLl9iM71OzuOCBZSgGAH_VUWMtGNp5oEjYXOsdzdfnnMysBnQk5NDXPTfhB2b9f171V7izfh-PXE8erfPkfIataVIMo2JTumW1XHZo5yIj0aVBzyE" alt="img" style="zoom:80%;" />

- 스마트 미러를 실행하면 음성명령을 통해 촬영, 검색, 캘린더 기능을 수행한다
