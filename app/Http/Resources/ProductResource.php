<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'name'        => $this->name,
            'price'       => $this->price,
            'photo'       => Storage::url($this->photo),
            'is_active'   => $this->is_active,
            'created_at'  => Carbon::parse($this->created_at)->toDateTimeLocalString(),
            'updated_at'  => Carbon::parse($this->updated_at)->toDateTimeLocalString(),
        ];
    }
}
