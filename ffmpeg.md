# FFMPEG memo

## 4k compressed
ffmpeg -i dooms-drool-trim.mp4 -c:v hevc_nvenc -preset p4 -rc vbr -cq 24 -c:a aac -b:a 128k  -movflags +faststart doom-min.mp4

## 2GB target
ffmpeg -i dooms-drool-trim.mp4 -c:v h264_nvenc -vf scale=1920:-2 -rc vbr -b:v 4400k -maxrate 6000k -bufsize 12000k -pass 1 -an -f null /dev/null && \
ffmpeg -i dooms-drool-trim.mp4 -c:v h264_nvenc -vf scale=1920:-2 -rc vbr -b:v 4400k -maxrate 6000k -bufsize 12000k -pass 2 -c:a aac -b:a 128k -movflags +faststart doom-drool-min-2gb.mp4
