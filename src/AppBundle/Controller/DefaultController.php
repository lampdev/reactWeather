<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        return $this->render('default/index.html.twig');
    }


    /**
     * @Route("/weather/{city}", name="weather")
     */
    public function weatherAction($city)
    {
        $BASE_URL = "http://query.yahooapis.com/v1/public/yql";
        $yql_query = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'.$city.'")';
        $yql_query_url = $BASE_URL . "?q=" . urlencode($yql_query) . "&format=json";
        $session = curl_init($yql_query_url);
        curl_setopt($session, CURLOPT_RETURNTRANSFER,true);
        $json = curl_exec($session);
        $phpObj = json_decode($json);
        $description = $phpObj->query->results->channel->description;
        $temp = $phpObj->query->results->channel->item->condition->temp;
        $key_word = $phpObj->query->results->channel->item->condition->text;
        $wind = $phpObj->query->results->channel->wind->speed;
        $humidity = $phpObj->query->results->channel->atmosphere->humidity;
//        die(var_dump($phpObj));
        $data = ['description' => $description, 'temp' => $temp, 'key_word' => $key_word, 'wind' => $wind, 'humidity' => $humidity];

        return new JsonResponse($data);
    }


}
