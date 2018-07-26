<?php
/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 16/07/2018
 * Time: 16:05
 */

namespace App\VideoStreamer\Video;


use App\VideoStreamer\VideoManager;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class VideoRepository
{
    protected $videoManager;

    public function __construct(VideoManager $videoManager)
    {
        $this->videoManager = $videoManager;
    }

    public function getVideoById($id)
    {
        return Video::findOrFail($id);
    }

    public function save($request)
    {
        $path = null;

        if ($request->hasFile('attachment')) {

            $path = $this->saveTicketAttachment($request);
        }

        $videoDetails = [
            'name' => $request->get('name'),
            'category' => $request->get('category'),
            'attachment' => $request->get('attachment'),
            'description' => $request->get('description'),
        ];

        return Video::create($videoDetails);
    }

    public function saveTicketAttachment($request)
    {
        $attachment = null;

        $attachment = $this->videoManager->uploadAttachments($request->file('attachment'));


        return $attachment;
    }

    public function getVideoDetails($id)
    {
        $videoDetails = $this->getVideoById($id);

        return [
            'fetched' => true,
            'data' => [
                'id' => $videoDetails->id,
                'name' => $videoDetails->name,
                'category' => $videoDetails->category,
                'description' => $videoDetails->description,
                'attachment' => $videoDetails->attachment,
            ],
        ];
    }

    public function getPlayVideo($fileName)
    {
        if (Storage::has($fileName)) {
            $file = Storage::get($fileName);
            $headers = [
                'Content-Type' => Storage::mimeType($fileName),
                'Content-Length' => Storage::size($fileName),
                'Content-Disposition' => "inline; filename={$fileName}",
            ];

            return Response::make($file, 200, $headers);
        }
    }
}