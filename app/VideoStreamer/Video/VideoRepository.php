<?php
/**
 * Created by PhpStorm.
 * User: cytonn
 * Date: 16/07/2018
 * Time: 16:05
 */

namespace App\VideoStreamer\Video;


use App\VideoStreamer\VideoManager;

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
            'attachment' => $path,
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
                'attachment' => $videoDetails->attachment,

            ],
        ];
    }
}