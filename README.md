# HLS Video Transcoding and Playback

This project sets up a Docker environment for transcoding video files into HLS (HTTP Live Streaming) format using ffmpeg. It also integrates Video.js for HLS video playback on a webpage.

The main benefit of using HLS (HTTP Live Streaming) for video playback is its ability to efficiently stream video content, especially for long videos, by dynamically fetching segments of the video as needed.

## Features

- **Dockerized Environment:** Easily deployable Docker image for video transcoding and playback setup.
- **ffmpeg Integration:** Convert video files into HLS format with segmented playlists.
- **Video.js Integration:** Use Video.js for seamless HLS video playback in web applications.

## Prerequisites

Before you begin, ensure you have the following installed:
- Docker
- Node.js (if testing locally without Docker)
- ffmpeg

## Getting Started

To get started with the project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2. Build the Docker Image

Build the Docker image using the provided Dockerfile:

```bash
docker build -t video_transcode .
```

### 3. Run the Docker Container

Replace `<local-video-folder>` with the path to your local video files:

```bash
docker run -it -v /path/to/local/videos:/home/app/videos video_transcode
```

### 4. Transcode Video to HLS

Inside the Docker container, use ffmpeg to convert a video file (`input.mp4`) into HLS format:

```bash
ffmpeg -i input.mp4  -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}

# example:
ffmpeg -i input.mp4 -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename outputs/segment%03d.ts -start_number 0 outputs/index.m3u8
```

### 5. Integrate HLS Playback

Use Video.js to integrate HLS video playback on a webpage. Include the following resources:

- Visit [videojs.com](https://videojs.com/getting-started) for Video.js setup.
- Use [videojs-contrib-hls](https://videojs.github.io/videojs-contrib-hls/) for HLS support.

### 6. Upload to S3 or Serve Locally

Once HLS segments are created (`outputs/index.m3u8`), upload them to an S3 bucket or serve them locally for playback.



## Example

To see a practical example of HLS playback using Video.js and ffmpeg, follow these steps:

1. Clone the repository and navigate to the Example directory:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo/Example/
   ```

2. Start a local web server to serve the example files. For Python 3.x, you can use:
   ```bash
   python3 -m http.server 80
   ```

3. Open your web browser and navigate to `http://localhost` (or the appropriate localhost address).

4. Open the developer tools in your browser and go to the network section.

5. Check that video segments (`*.ts` files) are loaded dynamically as they are requested by Video.js for seamless HLS playback.

### Screenshots

Here are some screenshots to guide you through the process:

- ![Example 1](/images/1.png)

- ![Example 2](/images/2.png)

- ![Example 2](/images/3.png)

- ![Example 2](/images/4.png)


### Video.js Configuration

For setting up Video.js with HLS support, refer to the [Video.js HLS Documentation](https://videojs.github.io/videojs-contrib-hls/).

## Contributing

Feel free to contribute to this project! Fork the repository and submit a pull request with your improvements.


Certainly! You can enhance the Example section with instructions and images like this:
