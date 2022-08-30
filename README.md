# 프론트엔드 개발자 박찬혁 포트폴리오

### aws ec2 에서 메모리 이슈로 jenkins 사용불가(추후 github action 을 통한 CD 작업)

```
docker build -t portfolio-image .
```


```
docker run -itd --name portfolio-container -p 80:80 portfolio-image
```
